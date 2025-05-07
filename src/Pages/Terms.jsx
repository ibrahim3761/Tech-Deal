import React from 'react';

const Terms = () => {
    return (
        <div className="max-w-3xl mx-auto p-5">
            <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>

            <p className="mb-4">
                By accessing and using our website, you agree to comply with the following terms and conditions.
                Please read them carefully.
            </p>

            <h2 className="text-2xl font-semibold mb-2">1. Use of Service</h2>
            <p className="mb-4">
                You agree to use the service only for lawful purposes and in a way that does not infringe
                on the rights of others.
            </p>

            <h2 className="text-2xl font-semibold mb-2">2. Account Registration</h2>
            <p className="mb-4">
                You must provide accurate and complete information when registering. You are responsible for
                maintaining the confidentiality of your account.
            </p>

            <h2 className="text-2xl font-semibold mb-2">3. Intellectual Property</h2>
            <p className="mb-4">
                All content on this site, including text, graphics, logos, and images, is the property of our company
                and is protected by copyright laws.
            </p>

            <h2 className="text-2xl font-semibold mb-2">4. Termination</h2>
            <p className="mb-4">
                We may terminate or suspend your access immediately if you violate these terms.
            </p>

            <h2 className="text-2xl font-semibold mb-2">5. Changes to Terms</h2>
            <p className="mb-4">
                We may update these terms from time to time. Continued use of the site after changes means you accept
                the new terms.
            </p>

            <p className="mt-6">Last updated: May 7, 2025</p>
        </div>
    );
};

export default Terms;