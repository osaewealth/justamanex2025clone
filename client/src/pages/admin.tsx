import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Save, X, Eye, EyeOff, FileText, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import StandardHeader from '@/components/StandardHeader';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

interface JobOpening {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  image: string;
  published: boolean;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'jobs' | 'blog'>('jobs');
  const [jobs, setJobs] = useState<JobOpening[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [editingJob, setEditingJob] = useState<JobOpening | null>(null);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [showJobForm, setShowJobForm] = useState(false);
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  // Simple authentication (you can enhance this later)
  const ADMIN_PASSWORD = 'amanex2025';

  useEffect(() => {
    // Load existing data from localStorage
    const savedJobs = localStorage.getItem('amanexJobs');
    const savedBlogs = localStorage.getItem('amanexBlogs');
    
    if (savedJobs) {
      setJobs(JSON.parse(savedJobs));
    }
    if (savedBlogs) {
      setBlogPosts(JSON.parse(savedBlogs));
    }
  }, []);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPassword('');
    } else {
      alert('Incorrect password');
    }
  };

  const saveJobs = (newJobs: JobOpening[]) => {
    setJobs(newJobs);
    localStorage.setItem('amanexJobs', JSON.stringify(newJobs));
  };

  const saveBlogs = (newBlogs: BlogPost[]) => {
    setBlogPosts(newBlogs);
    localStorage.setItem('amanexBlogs', JSON.stringify(newBlogs));
  };

  const addJob = (job: Omit<JobOpening, 'id'>) => {
    const newJob = { ...job, id: Date.now() };
    saveJobs([...jobs, newJob]);
    setShowJobForm(false);
  };

  const updateJob = (updatedJob: JobOpening) => {
    const newJobs = jobs.map(job => job.id === updatedJob.id ? updatedJob : job);
    saveJobs(newJobs);
    setEditingJob(null);
  };

  const deleteJob = (id: number) => {
    if (confirm('Are you sure you want to delete this job opening?')) {
      const newJobs = jobs.filter(job => job.id !== id);
      saveJobs(newJobs);
    }
  };

  const addBlog = (blog: Omit<BlogPost, 'id'>) => {
    const newBlog = { ...blog, id: Date.now() };
    saveBlogs([...blogPosts, newBlog]);
    setShowBlogForm(false);
  };

  const updateBlog = (updatedBlog: BlogPost) => {
    const newBlogs = blogPosts.map(blog => blog.id === updatedBlog.id ? updatedBlog : blog);
    saveBlogs(newBlogs);
    setEditingBlog(null);
  };

  const deleteBlog = (id: number) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      const newBlogs = blogPosts.filter(blog => blog.id !== id);
      saveBlogs(newBlogs);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full mx-auto p-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-2xl font-bold text-coty-navy">
                Admin Access
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                />
                <Button 
                  onClick={handleLogin}
                  className="w-full bg-coty-navy hover:bg-coty-navy/90"
                >
                  Login
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <StandardHeader />
      
      <div className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-coty-navy mb-4">Admin Dashboard</h1>
            <p className="text-gray-600">Manage job openings and blog posts easily</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-md">
              <button
                onClick={() => setActiveTab('jobs')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === 'jobs'
                    ? 'bg-coty-navy text-white shadow-md'
                    : 'text-gray-600 hover:text-coty-navy'
                }`}
              >
                <Briefcase className="inline w-5 h-5 mr-2" />
                Job Openings
              </button>
              <button
                onClick={() => setActiveTab('blog')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === 'blog'
                    ? 'bg-coty-navy text-white shadow-md'
                    : 'text-gray-600 hover:text-coty-navy'
                }`}
              >
                <FileText className="inline w-5 h-5 mr-2" />
                Blog Posts
              </button>
            </div>
          </div>

          {/* Content */}
          {activeTab === 'jobs' ? (
            <JobManagement 
              jobs={jobs}
              onAdd={addJob}
              onUpdate={updateJob}
              onDelete={deleteJob}
              editingJob={editingJob}
              setEditingJob={setEditingJob}
              showForm={showJobForm}
              setShowForm={setShowJobForm}
            />
          ) : (
            <BlogManagement 
              blogPosts={blogPosts}
              onAdd={addBlog}
              onUpdate={updateBlog}
              onDelete={deleteBlog}
              editingBlog={editingBlog}
              setEditingBlog={setEditingBlog}
              showForm={showBlogForm}
              setShowForm={setShowBlogForm}
            />
          )}
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

// Job Management Component
function JobManagement({ 
  jobs, 
  onAdd, 
  onUpdate, 
  onDelete, 
  editingJob, 
  setEditingJob, 
  showForm, 
  setShowForm 
}: {
  jobs: JobOpening[];
  onAdd: (job: Omit<JobOpening, 'id'>) => void;
  onUpdate: (job: JobOpening) => void;
  onDelete: (id: number) => void;
  editingJob: JobOpening | null;
  setEditingJob: (job: JobOpening | null) => void;
  showForm: boolean;
  setShowForm: (show: boolean) => void;
}) {
  const [formData, setFormData] = useState({
    title: '',
    department: '',
    location: '',
    type: '',
    experience: '',
    description: '',
    requirements: '',
    responsibilities: ''
  });

  useEffect(() => {
    if (editingJob) {
      setFormData({
        title: editingJob.title,
        department: editingJob.department,
        location: editingJob.location,
        type: editingJob.type,
        experience: editingJob.experience,
        description: editingJob.description,
        requirements: editingJob.requirements.join('\n'),
        responsibilities: editingJob.responsibilities.join('\n')
      });
    } else {
      setFormData({
        title: '',
        department: '',
        location: '',
        type: '',
        experience: '',
        description: '',
        requirements: '',
        responsibilities: ''
      });
    }
  }, [editingJob]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const jobData = {
      ...formData,
      requirements: formData.requirements.split('\n').filter(r => r.trim()),
      responsibilities: formData.responsibilities.split('\n').filter(r => r.trim())
    };

    if (editingJob) {
      onUpdate({ ...editingJob, ...jobData });
    } else {
      onAdd(jobData);
    }
    
    setFormData({
      title: '',
      department: '',
      location: '',
      type: '',
      experience: '',
      description: '',
      requirements: '',
      responsibilities: ''
    });
  };

  return (
    <div>
      {/* Add Job Button */}
      <div className="mb-6">
        <Button 
          onClick={() => setShowForm(true)}
          className="bg-coty-navy hover:bg-coty-navy/90"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add New Job Opening
        </Button>
      </div>

      {/* Job Form */}
      {showForm && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              {editingJob ? 'Edit Job Opening' : 'Add New Job Opening'}
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => {
                  setShowForm(false);
                  setEditingJob(null);
                }}
              >
                <X className="w-5 h-5" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Job Title"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  required
                />
                <Input
                  placeholder="Department"
                  value={formData.department}
                  onChange={(e) => setFormData({...formData, department: e.target.value})}
                  required
                />
                <Input
                  placeholder="Location"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  required
                />
                <Input
                  placeholder="Employment Type"
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                  required
                />
                <Input
                  placeholder="Experience Required"
                  value={formData.experience}
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                  required
                />
              </div>
              
              <Textarea
                placeholder="Job Description"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                required
                rows={3}
              />
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Requirements (one per line)
                </label>
                <Textarea
                  placeholder="Enter requirements, one per line"
                  value={formData.requirements}
                  onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                  required
                  rows={4}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Responsibilities (one per line)
                </label>
                <Textarea
                  placeholder="Enter responsibilities, one per line"
                  value={formData.responsibilities}
                  onChange={(e) => setFormData({...formData, responsibilities: e.target.value})}
                  required
                  rows={4}
                />
              </div>
              
              <div className="flex gap-4">
                <Button type="submit" className="bg-coty-navy hover:bg-coty-navy/90">
                  <Save className="w-5 h-5 mr-2" />
                  {editingJob ? 'Update Job' : 'Add Job'}
                </Button>
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => {
                    setShowForm(false);
                    setEditingJob(null);
                  }}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Jobs List */}
      <div className="space-y-4">
        {jobs.map((job) => (
          <Card key={job.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-coty-navy mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {job.department}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                      {job.location}
                    </span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
                      {job.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{job.description}</p>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setEditingJob(job)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onDelete(job.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        
        {jobs.length === 0 && (
          <Card>
            <CardContent className="p-8 text-center text-gray-500">
              <Briefcase className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <p>No job openings yet. Add your first one!</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

// Blog Management Component
function BlogManagement({ 
  blogPosts, 
  onAdd, 
  onUpdate, 
  onDelete, 
  editingBlog, 
  setEditingBlog, 
  showForm, 
  setShowForm 
}: {
  blogPosts: BlogPost[];
  onAdd: (blog: Omit<BlogPost, 'id'>) => void;
  onUpdate: (blog: BlogPost) => void;
  onDelete: (id: number) => void;
  editingBlog: BlogPost | null;
  setEditingBlog: (blog: BlogPost | null) => void;
  showForm: boolean;
  setShowForm: (show: boolean) => void;
}) {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    date: new Date().toISOString().split('T')[0],
    image: '',
    published: true
  });

  useEffect(() => {
    if (editingBlog) {
      setFormData({
        title: editingBlog.title,
        excerpt: editingBlog.excerpt,
        content: editingBlog.content,
        category: editingBlog.category,
        date: editingBlog.date,
        image: editingBlog.image,
        published: editingBlog.published
      });
    } else {
      setFormData({
        title: '',
        excerpt: '',
        content: '',
        category: '',
        date: new Date().toISOString().split('T')[0],
        image: '',
        published: true
      });
    }
  }, [editingBlog]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingBlog) {
      onUpdate({ ...editingBlog, ...formData });
    } else {
      onAdd(formData);
    }
    
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      category: '',
      date: new Date().toISOString().split('T')[0],
      image: '',
      published: true
    });
  };

  return (
    <div>
      {/* Add Blog Button */}
      <div className="mb-6">
        <Button 
          onClick={() => setShowForm(true)}
          className="bg-coty-navy hover:bg-coty-navy/90"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add New Blog Post
        </Button>
      </div>

      {/* Blog Form */}
      {showForm && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              {editingBlog ? 'Edit Blog Post' : 'Add New Blog Post'}
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => {
                  setShowForm(false);
                  setEditingBlog(null);
                }}
              >
                <X className="w-5 h-5" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Blog Title"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  required
                />
                <Input
                  placeholder="Category"
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  required
                />
                <Input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  required
                />
                <Input
                  placeholder="Image URL"
                  value={formData.image}
                  onChange={(e) => setFormData({...formData, image: e.target.value})}
                  required
                />
              </div>
              
              <Textarea
                placeholder="Blog Excerpt (short summary)"
                value={formData.excerpt}
                onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                required
                rows={2}
              />
              
              <Textarea
                placeholder="Blog Content (full article)"
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
                required
                rows={8}
              />
              
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="published"
                  checked={formData.published}
                  onChange={(e) => setFormData({...formData, published: e.target.checked})}
                />
                <label htmlFor="published" className="text-sm font-medium text-gray-700">
                  Publish immediately
                </label>
              </div>
              
              <div className="flex gap-4">
                <Button type="submit" className="bg-coty-navy hover:bg-coty-navy/90">
                  <Save className="w-5 h-5 mr-2" />
                  {editingBlog ? 'Update Blog' : 'Add Blog'}
                </Button>
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => {
                    setShowForm(false);
                    setEditingBlog(null);
                  }}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Blog Posts List */}
      <div className="space-y-4">
        {blogPosts.map((blog) => (
          <Card key={blog.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-coty-navy">{blog.title}</h3>
                    {blog.published ? (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        Published
                      </span>
                    ) : (
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                        Draft
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {blog.category}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                      {blog.date}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{blog.excerpt}</p>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setEditingBlog(blog)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onDelete(blog.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        
        {blogPosts.length === 0 && (
          <Card>
            <CardContent className="p-8 text-center text-gray-500">
              <FileText className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <p>No blog posts yet. Add your first one!</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
