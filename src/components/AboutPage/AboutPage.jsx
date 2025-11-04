import React from 'react'

const AboutPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-12 w-screen">
            <div className="max-w-3xl w-full bg-white shadow-md rounded-xl p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                    About Our Community Accessibility Map
                </h1>
                <p className="text-gray-600 mb-6 text-center">
                    Our mission is to make cities more inclusive by helping people discover, share, and improve
                    accessibility in public spaces.
                </p>

                <div className="space-y-6">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800">✨ What is this project?</h2>
                        <p className="text-gray-600 mt-2">
                            It’s a collaborative map built by the community to highlight accessible locations
                            and identify areas that need improvement. Users can add markers, upload photos, and
                            leave comments to share real-world accessibility information.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-800">✨ Who can contribute?</h2>
                        <p className="text-gray-600 mt-2">
                            Anyone can contribute! Just simply create an account to add markers and comments.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-800">✨ How does it work?</h2>
                        <p className="text-gray-600 mt-2">
                            Just explore the map, add new places, and share accessibility details.
                        </p>
                    </div>
                </div>

                <div className="mt-10 text-center">
                    <p className="text-gray-500 text-sm">
                        Built by the community, for the community 💚
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutPage