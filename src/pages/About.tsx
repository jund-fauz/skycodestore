function About() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">About SkyCode Store</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              SkyCode Store is a marketplace initiative by SkyCode Ventures Indonesia, 
              dedicated to fostering the growth of Web3 technology and community in Indonesia. 
              We aim to provide a trusted platform where developers, creators, and businesses 
              can connect, trade, and grow in the Web3 ecosystem.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">SkyCode Labs</h2>
            <p className="text-gray-600">
              As part of SkyCode Labs, a community-based non-profit organization, 
              we're committed to advancing discussions and knowledge sharing about Web3 
              technology. Our marketplace serves as a practical extension of this mission, 
              enabling community members to participate in the Web3 economy directly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">SkyCode Ventures Indonesia</h2>
            <p className="text-gray-600">
              SkyCode Ventures Indonesia manages this marketplace, ensuring high-quality 
              products and services, secure transactions, and excellent support for all 
              users. We leverage our expertise in Web3 technology to create a safe and 
              efficient trading environment.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;