import { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  lastSignInAt: string;
}

const AdminUsers = () => {
  const { user: currentUser } = useUser();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Aquí puedes usar la API de Clerk para obtener todos los usuarios
        const response = await fetch('https://api.clerk.com/v1/users', {
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_CLERK_SECRET_KEY}`,
            'Content-Type': 'application/json',
          },
        });
        
        const data = await response.json();
        
        const formattedUsers = data.map((user: any) => ({
          id: user.id,
          email: user.email_addresses?.[0]?.email_address || 'No email',
          firstName: user.first_name || '',
          lastName: user.last_name || '',
          createdAt: new Date(user.created_at).toLocaleString(),
          lastSignInAt: user.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleString() : 'Never'
        }));

        setUsers(formattedUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-lg">Loading users...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Registered Users</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Sign In</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {user.firstName} {user.lastName}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{user.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{user.createdAt}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{user.lastSignInAt}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers; 