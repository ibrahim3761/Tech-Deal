import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="max-w-3xl mx-auto p-5">
            <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

            <p className="mb-4">
                Your privacy is important to us. It is our policy to respect your privacy
                regarding any information we may collect from you across our website.
            </p>

            <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
            <p className="mb-4">
                We may collect personal information such as your name, email address,
                and profile photo when you register or use our services.
            </p>

            <h2 className="text-2xl font-semibold mb-2">2. How We Use Information</h2>
            <p className="mb-4">
                We use your information to:
                <ul className="list-disc pl-5 mt-2">
                    <li>Provide and maintain our service</li>
                    <li>Notify you about changes to our service</li>
                    <li>Provide customer support</li>
                    <li>Monitor usage to improve the service</li>
                </ul>
            </p>

            <h2 className="text-2xl font-semibold mb-2">3. Sharing Your Information</h2>
            <p className="mb-4">
                We do not share your personal information with third parties except when required by law.
            </p>

            <h2 className="text-2xl font-semibold mb-2">4. Security</h2>
            <p className="mb-4">
                We take reasonable steps to protect your personal data but remember that no method of
                transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold mb-2">5. Changes to This Policy</h2>
            <p className="mb-4">
                We may update our Privacy Policy from time to time. We encourage you to review this page periodically.
            </p>

            <p className="mt-6">Last updated: May 7, 2025</p>
        </div>
    );
};

export default PrivacyPolicy;
