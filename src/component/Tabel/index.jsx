import React from 'react'

const index = ({PlayerData}) => {
  return (
    <div>
       <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md mt-5">
          <thead className="bg-red-400">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-white">
                player Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-white">
                player Team
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-white">
                Country
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-white">
                Position
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-white">
                Goal
              </th>
            </tr>
          </thead>
          <tbody>
            {PlayerData.map((item) => (
              <tr key={item.id} className="border-t font-semibold">
                <td className="px-5 py-2 text-sm text-gray-700">
                  {item.name}
                </td>
                <td className="px-5 py-2 text-sm text-gray-700">
                  {item.team.name}
                </td>
                <td className="px-5 py-2 text-sm text-gray-700">
                  {item.country}
                </td>
                <td className="px-5 py-2 text-sm text-gray-700">
                  {item.position}
                </td>
                <td className="px-5 py-2 text-sm text-gray-700">
                {item.goal}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default index
