'use client';

import { useState } from 'react';
import { getCookie } from 'react-use-cookie';

const downloadCSV = async (month?: string) => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/order-csv?month=${month}`, {
    method: 'GET',
    headers: {
      Accept: 'text/csv',
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });

  if (!response.ok) {
    throw new Error('CSV export failed');
  }

  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  const contentDisposition = response.headers.get('Content-Disposition');
  const match = contentDisposition?.match(/filename="?(.+)"?/);
  const filename = match?.[1] ?? 'order_report.csv';

  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  window.URL.revokeObjectURL(url);
};

export default function OrderExportButton({month}) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      await downloadCSV(month); 
    } catch (err) {
      alert('Failed to download CSV');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="currentColor"
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
        />
      </svg>
      {loading ? 'Exporting...' : 'Export to CSV'}
    </button>
  );
}
