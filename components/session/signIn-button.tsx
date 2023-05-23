import { signIn } from 'next-auth/react';
import React from 'react';

function SignInButton() {
  return (
    <div>
      <button
        onClick={() => signIn()}
        className="bg-gray-700 hover:bg-gray-600 text-gray-300 py-2 px-4 rounded"
        title="Logg Inn"
      >
        Logg In
      </button>
    </div>
  );
}

export default SignInButton;
