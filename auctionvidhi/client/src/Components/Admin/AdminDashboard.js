
import React from 'react';
import AdminSidebar from './AdminSidebar';

function AdminDashboard() {
  return (
    <div className="container-fluid admin">
      <div className="row">
        {/* Sidebar Component */}
        <AdminSidebar />
        {/* Main Content */}
        <div className="col">
          <h1>Admin Content</h1>
          <p>This is the admin content area.</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
