"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBug, FaPlus, FaCoffee, FaEdit, FaTrash, FaSearch, FaFilter, FaTimes, FaUser } from 'react-icons/fa';
import { Bug, Layout, AlertTriangle, FileText, ListChecks, Flame, AlertCircle, CircleDot, Plus, Save, Loader2, X } from 'lucide-react';
import axios from 'axios';
import "../styles/Utils.css";



const Navbugs = () => {
  
  // Configuration
  const API_URL = "http://localhost:5000/api/bugs";
  const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MTVjMWE4YWI3MTUxMDE4NDJjM2FjOSIsImlhdCI6MTc0Njg0ODU1NiwiZXhwIjoxNzQ5NDQwNTU2fQ.l1DquuClWJtbhfLA7FGevM2SjK7Ss_PoIkhMfjmUz6o";

  // State
  const [bugs, setBugs] = useState([]);
  const [filteredBugs, setFilteredBugs] = useState([]);
  const [filterTypes, setFilterTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [form, setForm] = useState({
    bugModule: '',
    bugType: '',
    bugDescription: '',
    requirement: '',
    severity: 'Medium',
    priority: 'Medium',
    status: 'Open'
  });
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentSerialNumber, setCurrentSerialNumber] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    severity: '',
    priority: '',
    status: ''
  });
  const [showFilters, setShowFilters] = useState(false);

  // Fetch all bugs
  const fetchBugs = async () => {
    try {
      const response = await axios.get(`${API_URL}/all`, {
        headers: {
          'Authorization': `Bearer ${TOKEN}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.data.success) {
        setBugs(response.data.bugs);
        setFilteredBugs(response.data.bugs);
        
        // Extract unique bug types for filter dropdown
        const types = [...new Set(response.data.bugs.map(bug => bug.bugType))];
        setFilterTypes(types);
      }
    } catch (error) {
      console.error("Error fetching bugs:", error);
      alert(`Error: ${error.response?.data?.message || error.message}`);
    }
  };

  // Apply filters and search
  const applyFilters = () => {
    let results = [...bugs];

    // Apply type filter
    if (selectedType) {
      results = results.filter(bug => bug.bugType === selectedType);
    }

    // Apply other filters
    if (filters.severity) {
      results = results.filter(bug => bug.severity === filters.severity);
    }
    if (filters.priority) {
      results = results.filter(bug => bug.priority === filters.priority);
    }
    if (filters.status) {
      results = results.filter(bug => bug.status === filters.status);
    }

    // Apply search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(bug => 
        bug.bugDescription.toLowerCase().includes(query) ||
        bug.requirement.toLowerCase().includes(query) ||
        bug.bugModule.toLowerCase().includes(query)
      );
    }

    setFilteredBugs(results);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isEditing && currentSerialNumber) {
        // Update existing bug
        const response = await axios.put(
          `${API_URL}/update/${currentSerialNumber}`,
          form,
          {
            headers: {
              'Authorization': `Bearer ${TOKEN}`,
              'Content-Type': 'application/json'
            }
          }
        );

        if (response.data.success) {
          fetchBugs(); // Refresh the list
          resetForm();
        }
      } else {
        // Create new bug
        const response = await axios.post(
          `${API_URL}/create`,
          form,
          {
            headers: {
              'Authorization': `Bearer ${TOKEN}`,
              'Content-Type': 'application/json'
            }
          }
        );

        if (response.data.success) {
          fetchBugs(); // Refresh the list
          resetForm();
        }
      }
    } catch (error) {
      console.error('Error saving bug:', error);
      alert(`Error: ${error.response?.data?.message || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Handle edit
  const handleEdit = (bug) => {
    setForm({
      bugModule: bug.bugModule,
      bugType: bug.bugType,
      bugDescription: bug.bugDescription,
      requirement: bug.requirement,
      severity: bug.severity,
      priority: bug.priority,
      status: bug.status
    });
    setCurrentSerialNumber(bug.serialNumber);
    setIsEditing(true);
    setShowModal(true);
  };

  // Handle delete
  const handleDelete = async (serialNumber) => {
    if (window.confirm('Are you sure you want to delete this bug?')) {
      try {
        const response = await axios.delete(
          `${API_URL}/delete/${serialNumber}`,
          {
            headers: {
              'Authorization': `Bearer ${TOKEN}`,
              'Content-Type': 'application/json'
            }
          }
        );

        if (response.data.success) {
          fetchBugs(); // Refresh the list
        }
      } catch (error) {
        console.error('Error deleting bug:', error);
        alert(`Error: ${error.response?.data?.message || error.message}`);
      }
    }
  };

  // Reset form
  const resetForm = () => {
    setForm({
      bugModule: '',
      bugType: '',
      bugDescription: '',
      requirement: '',
      severity: 'Medium',
      priority: 'Medium',
      status: 'Open'
    });
    setShowModal(false);
    setIsEditing(false);
    setCurrentSerialNumber(null);
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Badge style
  const badgeStyle = (type) => {
    const base = "px-2 py-1 text-xs font-semibold rounded-full";
    const colors = {
      Critical: "bg-red-500 text-white",
      High: "bg-orange-500 text-white",
      Medium: "bg-yellow-400 text-black",
      Low: "bg-green-500 text-white",
      Open: "bg-blue-600 text-white",
      "In Progress": "bg-purple-500 text-white",
      Resolved: "bg-green-500 text-white",
      Closed: "bg-gray-400 text-white",
      Reopened: "bg-pink-500 text-white"
    };
    return `${base} ${colors[type] || "bg-gray-300 text-black"}`;
  };

  // Initialize
  useEffect(() => {
    fetchBugs();
  }, []);

  // Apply filters when they change
  useEffect(() => {
    applyFilters();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedType, filters, searchQuery, bugs]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 relative">
      {/* Navigation with integrated filters */}
      <motion.nav
        className="bg-gradient-to-r from-blue-50 via-white to-purple-100 text-gray-800 px-6 py-3 shadow-sm border-b border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center sticky top-0 z-50 gap-4"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Logo and title */}
        <div className="flex items-center gap-2">
          <FaCoffee size={28} className="text-blue-500 animate-spin-slow" />
          <h1 className="text-xl font-bold text-gray-800">CaffeeTest</h1>
        </div>

        {/* Integrated search and filters */}
        <div className="w-full md:w-auto flex flex-col md:flex-row items-stretch gap-3">
          {/* Search bar with filter controls */}
          <div className="relative flex-grow flex items-center gap-2">
            {/* Search input */}
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search bugs..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Type filter dropdown */}
            <select
              className="border border-gray-300 no-arrow text-gray-700 py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-sm min-w-[120px]"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="">All Types</option>
              {filterTypes.map((type, idx) => (
                <option key={idx} value={type}>{type}</option>
              ))}
            </select>

            {/* Filter toggle button - Updated style */}
            <button
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-sm ${
                showFilters 
                  ? 'bg-blue-500 text-white hover:bg-blue-600' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
              onClick={() => setShowFilters(!showFilters)}
            >
              <FaFilter />
              <span className="hidden md:inline">Filters</span>
            </button>
          </div>

          {/* Add bug button */}
         <button
  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-full transition-all duration-200 hover:shadow-md flex items-center gap-2 group"
  onClick={() => setShowModal(true)}
>
  <FaPlus className="h-4 w-4 stroke-2 group-hover:scale-110 transition-transform" />
  <span className="text-sm">Add Bug</span>
</button>

        </div>
      </motion.nav>

{/* Filter Sidebar */}
{/* Filter Sidebar */}
<motion.div
  className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-40`}
  initial={{ x: '100%' }}
  animate={{ x: showFilters ? 0 : '100%' }}
  transition={{ type: 'tween', ease: [0.1, 1, 0.1, 1], duration: 0.1 }}
>
  <div className="p-6 h-full flex flex-col">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-bold text-gray-800">Filter Bugs</h2>
      <button
        onClick={() => setShowFilters(false)}
        className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"
      >
        <FaTimes size={20} />
      </button>
    </div>

    <div className="flex-1 overflow-y-auto">
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Severity</h3>
          <div className="space-y-2">
            {['Critical', 'High', 'Medium', 'Low'].map((level) => (
              <label key={level} className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="severity"
                  checked={filters.severity === level}
                  onChange={() => setFilters({...filters, severity: level})}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700">{level}</span>
              </label>
            ))}
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="severity"
                checked={filters.severity === ''}
                onChange={() => setFilters({...filters, severity: ''})}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-gray-700">All Severities</span>
            </label>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Priority</h3>
          <div className="space-y-2">
            {['Critical', 'High', 'Medium', 'Low'].map((level) => (
              <label key={level} className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="priority"
                  checked={filters.priority === level}
                  onChange={() => setFilters({...filters, priority: level})}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700">{level}</span>
              </label>
            ))}
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="priority"
                checked={filters.priority === ''}
                onChange={() => setFilters({...filters, priority: ''})}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-gray-700">All Priorities</span>
            </label>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Status</h3>
          <div className="space-y-2">
            {['Open', 'In Progress', 'Resolved', 'Closed', 'Reopened'].map((status) => (
              <label key={status} className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="status"
                  checked={filters.status === status}
                  onChange={() => setFilters({...filters, status: status})}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700">{status}</span>
              </label>
            ))}
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="status"
                checked={filters.status === ''}
                onChange={() => setFilters({...filters, status: ''})}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-gray-700">All Statuses</span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div className="pt-4 border-t border-gray-200">
      <button
        onClick={() => {
          setFilters({
            severity: '',
            priority: '',
            status: ''
          });
          setSelectedType('');
        }}
        className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors font-medium"
      >
        Clear All Filters
      </button>
    </div>
  </div>
</motion.div>

      {/* Overlay when sidebar is open */}
      {showFilters && (
        <div 
          className="fixed inset-0 bg-black/30 z-30"
          onClick={() => setShowFilters(false)}
        />
      )}

      {/* Bug Cards */}
<div className="px-6 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {filteredBugs.length === 0 ? (
    <div className="col-span-full text-center py-10">
      <p className="text-gray-500 text-lg">No bugs found matching your criteria</p>
    </div>
  ) : (
    filteredBugs.map((bug) => (
      <motion.div
        key={bug._id}
        className="bg-white p-6 rounded-xl mt-6 shadow-md hover:shadow-lg transition-all border-l-4 border-blue-500 hover:border-blue-600 relative"
        whileHover={{ scale: 1.03 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Top row - Serial number, bug type, and status in one line */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-500">ID:{bug.serialNumber}</span>
            <FaBug className="text-red-500 text-xl" />
            <h3 className="text-lg font-bold text-gray-800">{bug.bugType}</h3>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${badgeStyle(bug.status)}`}>
            {bug.status}
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex items-start">
            <span className="text-sm font-medium text-gray-500 w-24">Module:</span>
            <span className="text-sm text-gray-700 flex-1">{bug.bugModule}</span>
          </div>

          <div className="flex items-start">
            <span className="text-sm font-medium text-gray-500 w-24">Description:</span>
            <span className="text-sm text-gray-700 flex-1">{bug.bugDescription}</span>
          </div>

          <div className="flex items-start">
            <span className="text-sm font-medium text-gray-500 w-24">Requirement:</span>
            <span className="text-sm text-gray-700 flex-1">{bug.requirement}</span>
          </div>

          <div className="flex items-start">
            <span className="text-sm font-medium text-gray-500 w-24">Reported:</span>
            <span className="text-sm text-gray-700 flex-1">
              {formatDate(bug.createdAt)}
            </span>
          </div>

          {bug.updatedAt && (
            <div className="flex items-start">
              <span className="text-sm font-medium text-gray-500 w-24">Last Updated:</span>
              <span className="text-sm text-gray-700 flex-1">
                {formatDate(bug.updatedAt)}
              </span>
            </div>
          )}
        </div>

        {/* Bottom row - Severity, Priority, and action buttons in one line */}
        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
          <div className="flex gap-2">
            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${badgeStyle(bug.severity)}`}>
              Severity: {bug.severity}
            </span>
            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${badgeStyle(bug.priority)}`}>
              Priority: {bug.priority}
            </span>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={() => handleEdit(bug)}
              className="text-blue-500 hover:text-blue-700 transition-colors p-1"
              title="Edit Bug"
            >
              <FaEdit className="text-lg" />
            </button>
            <button
              onClick={() => handleDelete(bug.serialNumber)}
              className="text-red-500 hover:text-red-700 transition-colors p-1"
              title="Delete Bug"
            >
              <FaTrash className="text-lg" />
            </button>
          </div>
        </div>
      </motion.div>
    ))
  )}
</div>

      {/* Add/Edit Bug Modal */}
      {showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
    <motion.div 
      className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4 border border-orange-100 overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {/* Modal Header */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Bug className="h-6 w-6 text-white" />
            <h2 className="text-2xl font-bold text-white">
              {isEditing ? 'Edit Bug Report' : 'Report New Bug'}
            </h2>
          </div>
          <button
            onClick={resetForm}
            className="text-white hover:text-amber-100 transition-colors p-1 rounded-full hover:bg-orange-600/30"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Modal Body */}
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className=" text-sm font-medium text-gray-700 flex items-center gap-2">
              <Layout className="h-4 w-4 text-orange-500" />
              Module Name
            </label>
            <input
              type="text"
              name="bugModule"
              value={form.bugModule}
              onChange={(e) => setForm({...form, bugModule: e.target.value})}
              placeholder="e.g., Authentication Module"
              required
              className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className=" text-sm font-medium text-gray-700 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-orange-500" />
              Bug Type
            </label>
            <input
              type="text"
              name="bugType"
              value={form.bugType}
              onChange={(e) => setForm({...form, bugType: e.target.value})}
              placeholder="e.g., UI Bug, Logic Error"
              required
              className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <FileText className="h-4 w-4 text-orange-500" />
            Description
          </label>
          <textarea
            name="bugDescription"
            value={form.bugDescription}
            onChange={(e) => setForm({...form, bugDescription: e.target.value})}
            placeholder="Detailed description of the bug..."
            required
            rows="4"
            className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className=" text-sm font-medium text-gray-700 flex items-center gap-2">
            <ListChecks className="h-4 w-4 text-orange-500" />
            Requirement
          </label>
          <input
            type="text"
            name="requirement"
            value={form.requirement}
            onChange={(e) => setForm({...form, requirement: e.target.value})}
            placeholder="Related requirement or user story"
            className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className=" text-sm font-medium text-gray-700 flex items-center gap-2">
              <Flame className="h-4 w-4 text-orange-500" />
              Severity
            </label>
            <select
              name="severity"
              value={form.severity}
              onChange={(e) => setForm({...form, severity: e.target.value})}
              className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent appearance-none bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiBvcmFuZ2UiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSI+PC9wb2x5bGluZT48L3N2Zz4=')] bg-no-repeat bg-[center_right_1rem]"
            >
              <option value="Critical">Critical</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-orange-500" />
              Priority
            </label>
            <select
              name="priority"
              value={form.priority}
              onChange={(e) => setForm({...form, priority: e.target.value})}
              className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent appearance-none bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiBvcmFuZ2UiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSI+PC9wb2x5bGluZT48L3N2Zz4=')] bg-no-repeat bg-[center_right_1rem]"
            >
              <option value="Critical">Critical</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <CircleDot className="h-4 w-4 text-orange-500" />
              Status
            </label>
            <select
              name="status"
              value={form.status}
              onChange={(e) => setForm({...form, status: e.target.value})}
              className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent appearance-none bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiBvcmFuZ2UiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSI+PC9wb2x5bGluZT48L3N2Zz4=')] bg-no-repeat bg-[center_right_1rem]"
            >
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
              <option value="Closed">Closed</option>
              <option value="Reopened">Reopened</option>
            </select>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end gap-4 pt-4 border-t border-orange-100">
          <button
            type="button"
            onClick={resetForm}
            className="px-6 py-3 text-gray-700 hover:text-orange-700 transition-all duration-200 hover:bg-orange-50 rounded-lg border border-orange-200 font-medium flex items-center gap-2"
          >
            <X className="h-5 w-5" />
            Cancel
          </button>
          <button
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 font-medium flex items-center gap-2"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin h-5 w-5 text-white" />
                Processing...
              </>
            ) : isEditing ? (
              <>
                <Save className="h-5 w-5" />
                Update Bug
              </>
            ) : (
              <>
                <Plus className="h-5 w-5" />
                Submit Bug
              </>
            )}
          </button>
        </div>
      </form>
    </motion.div>
  </div>
)}
    </div>
  );
};

export default Navbugs;