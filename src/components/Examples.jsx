import { useState } from 'react';
import './Examples.css';

const Examples = () => {
  const [activeExample, setActiveExample] = useState(0);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const examples = [
    {
      id: 0,
      category: 'Basic',
      icon: '🎯',
      title: 'Simple GET Request',
      description: 'Test a basic GET endpoint with 100 concurrent requests',
      useCase: 'Perfect for testing read-heavy APIs like search, listings, or public data endpoints',
      code: `@EnableLoadTesting
public class ProductApiTest {

    @Test
    @DisplayName("Test product listing endpoint")
    @LoadTest(
        url = "https://api.store.com/products",
        method = LoadHttpMethod.GET,
        requests = 100
    )
    public void testProductListing(LoadTestResultDto result) {
        // Print summary to console
        result.printSummary();
        
        // Verify all requests succeeded
        assertThat(result.successfulRequests())
            .isEqualTo(100);
        
        // Ensure fast response times
        assertThat(result.averageResponseTimeMs())
            .isLessThan(300);
        
        // Check status codes
        assertThat(result.statusCodeDistribution())
            .containsEntry(200, 100);
    }
}`,
      output: `========== Load Test Summary ==========
Total Requests:      100
Successful:          100
Failed:              0
Average Response:    245ms
Min Response:        121ms
Max Response:        458ms
Requests/Second:     87.3
Status Codes:        {200=100}
========================================`
    },
    {
      id: 1,
      category: 'Advanced',
      icon: '⏱️',
      title: 'Duration-Based Stress Test',
      description: 'Sustain load for 60 seconds with 50 concurrent threads',
      useCase: 'Ideal for testing system stability under sustained traffic, like during peak hours or flash sales',
      code: `@EnableLoadTesting
public class CheckoutApiTest {

    @Test
    @DisplayName("Stress test checkout API for 1 minute")
    @LoadTest(
        url = "https://api.store.com/checkout",
        method = LoadHttpMethod.POST,
        threads = 50,
        duration = 60
    )
    public void testCheckoutUnderLoad(LoadTestResultDto result) {
        // Print detailed metrics
        result.printSummary();
        
        // Verify high throughput
        assertThat(result.requestsPerSecond())
            .isGreaterThan(200);
        
        // Ensure 99% success rate
        double successRate = (double) result.successfulRequests() 
                           / result.totalRequests();
        assertThat(successRate).isGreaterThan(0.99);
        
        // Max response time under 2 seconds
        assertThat(result.maxResponseTimeMs())
            .isLessThan(2000);
    }
}`,
      output: `========== Load Test Summary ==========
Total Requests:      12,450
Successful:          12,389
Failed:              61
Average Response:    385ms
Min Response:        98ms
Max Response:        1,847ms
Requests/Second:     207.5
Status Codes:        {200=12389, 503=61}
========================================`
    },
    {
      id: 2,
      category: 'Real-World',
      icon: '🔐',
      title: 'Authentication Endpoint',
      description: 'Test login endpoint with multiple concurrent users',
      useCase: 'Validate authentication systems can handle login spikes during peak times',
      code: `@EnableLoadTesting
public class AuthApiTest {

    @Test
    @DisplayName("Test login endpoint capacity")
    @LoadTest(
        url = "https://api.auth.com/login",
        method = LoadHttpMethod.POST,
        threads = 100,
        duration = 30
    )
    public void testLoginCapacity(LoadTestResultDto result) {
        result.printSummary();
        
        // Ensure system handles concurrent logins
        assertThat(result.totalRequests())
            .isGreaterThan(1000);
        
        // Success rate should be high
        assertThat(result.successfulRequests())
            .isGreaterThan(950);
        
        // Response time critical for UX
        assertThat(result.averageResponseTimeMs())
            .isLessThan(500);
        
        // Verify rate limiting (429 responses)
        assertThat(result.statusCodeDistribution())
            .containsKey(200);
    }
}`,
      output: `========== Load Test Summary ==========
Total Requests:      3,245
Successful:          3,180
Failed:              65
Average Response:    421ms
Min Response:        156ms
Max Response:        1,234ms
Requests/Second:     108.2
Status Codes:        {200=3180, 429=65}
========================================`
    },
    {
      id: 3,
      category: 'Performance',
      icon: '📊',
      title: 'Response Time Analysis',
      description: 'Analyze response time distribution and performance characteristics',
      useCase: 'Establish performance baselines and identify response time patterns',
      code: `@EnableLoadTesting
public class PerformanceAnalysisTest {

    @Test
    @DisplayName("Analyze API response time characteristics")
    @LoadTest(
        url = "https://api.example.com/data",
        method = LoadHttpMethod.GET,
        threads = 50,
        duration = 30
    )
    public void analyzeResponseTimes(LoadTestResultDto result) {
        result.printSummary();
        
        // Min response should be reasonable
        assertThat(result.minResponseTimeMs())
            .isLessThan(100);
        
        // Average should be acceptable
        assertThat(result.averageResponseTimeMs())
            .isLessThan(500);
        
        // Max response shouldn't spike too high
        assertThat(result.maxResponseTimeMs())
            .isLessThan(2000);
        
        // Ensure consistent throughput
        assertThat(result.requestsPerSecond())
            .isGreaterThan(50);
    }
}`,
      output: `========== Load Test Summary ==========
Total Requests:      1,847
Successful:          1,847
Failed:              0
Average Response:    312ms
Min Response:        87ms
Max Response:        1,456ms
Requests/Second:     61.6
Status Codes:        {200=1847}
========================================`
    },
    {
      id: 4,
      category: 'Integration',
      icon: '🔄',
      title: 'CI/CD Pipeline Integration',
      description: 'Automated performance testing in your build pipeline',
      useCase: 'Catch performance regressions before they reach production',
      code: `@EnableLoadTesting
public class PerformanceRegressionTest {

    @Test
    @DisplayName("Performance regression test")
    @LoadTest(
        url = "https://staging.api.com/search",
        method = LoadHttpMethod.GET,
        threads = 20,
        duration = 15
    )
    public void detectPerformanceRegression(LoadTestResultDto result) {
        // Auto-print summary for CI logs
        result.printSummary();
        
        // Define performance SLA
        final double MAX_AVG_RESPONSE_MS = 300;
        final double MIN_REQUESTS_PER_SEC = 50;
        final double MIN_SUCCESS_RATE = 0.98;
        
        // Assert SLA compliance
        assertThat(result.averageResponseTimeMs())
            .as("Average response time exceeds SLA")
            .isLessThan(MAX_AVG_RESPONSE_MS);
        
        assertThat(result.requestsPerSecond())
            .as("Throughput below minimum threshold")
            .isGreaterThan(MIN_REQUESTS_PER_SEC);
        
        double successRate = (double) result.successfulRequests() 
                           / result.totalRequests();
        assertThat(successRate)
            .as("Success rate below acceptable threshold")
            .isGreaterThan(MIN_SUCCESS_RATE);
    }
}`,
      output: `========== Load Test Summary ==========
Total Requests:      1,234
Successful:          1,210
Failed:              24
Average Response:    287ms
Min Response:        156ms
Max Response:        892ms
Requests/Second:     82.3
Status Codes:        {200=1210, 503=24}
========================================

✓ Average response time: 287ms (SLA: 300ms)
✓ Throughput: 82.3 req/s (SLA: 50 req/s)
✓ Success rate: 98.05% (SLA: 98%)
✓ All performance SLAs met
✓ Build passed`
    },
    {
      id: 5,
      category: 'Real-World',
      icon: '🛒',
      title: 'E-commerce Flash Sale Simulation',
      description: 'Simulate Black Friday traffic on your shopping cart',
      useCase: 'Prepare for high-traffic events and ensure system resilience',
      code: `@EnableLoadTesting
public class FlashSaleSimulationTest {

    @Test
    @DisplayName("Simulate Black Friday traffic")
    @LoadTest(
        url = "https://api.shop.com/cart/add",
        method = LoadHttpMethod.POST,
        threads = 500,
        duration = 120
    )
    public void testFlashSaleCapacity(LoadTestResultDto result) {
        result.printSummary();
        
        // Calculate key metrics
        double ordersPerMinute = result.requestsPerSecond() * 60;
        double errorRate = (double) (result.totalRequests() 
                          - result.successfulRequests()) 
                          / result.totalRequests();
        
        // Business requirements
        assertThat(ordersPerMinute)
            .as("Must handle 10k orders/minute")
            .isGreaterThan(10000);
        
        assertThat(errorRate)
            .as("Error rate must be under 5%")
            .isLessThan(0.05);
        
        assertThat(result.averageResponseTimeMs())
            .as("Cart should respond in under 1 second")
            .isLessThan(1000);
        
        // Verify most requests succeeded
        assertThat(result.successfulRequests())
            .isGreaterThan(60000);
    }
}`,
      output: `========== Load Test Summary ==========
Total Requests:      68,540
Successful:          66,234
Failed:              2,306
Average Response:    847ms
Min Response:        234ms
Max Response:        2,145ms
Requests/Second:     571.2
Status Codes:        {200=66234, 503=2306}
========================================

✓ Orders/Minute: 34,272
✓ Error Rate: 3.36%
✓ System ready for flash sale`
    }
  ];

  return (
    <section id="examples" className="examples">
      <div className="examples-container">
        
        {/* Header */}
        <div className="examples-header">
          <span className="section-badge">Learn by Example</span>
          <h2 className="section-title">
            Real-World <span className="gradient-text">Use Cases</span>
          </h2>
          <p className="section-description">
            See how developers use API Stress Lab to solve real performance testing challenges
          </p>
        </div>

        {/* Examples Navigation */}
        <div className="examples-nav">
          {examples.map((example) => (
            <button
              key={example.id}
              className={`example-nav-item ${activeExample === example.id ? 'active' : ''}`}
              onClick={() => setActiveExample(example.id)}
            >
              <span className="example-nav-icon">{example.icon}</span>
              <span className="example-nav-text">
                <span className="example-nav-category">{example.category}</span>
                <span className="example-nav-title">{example.title}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Active Example Display */}
        <div className="example-display">
          {examples.map((example) => (
            <div
              key={example.id}
              className={`example-content ${activeExample === example.id ? 'active' : ''}`}
            >
              <div className="example-info">
                <div className="example-badge">
                  <span className="example-icon-large">{example.icon}</span>
                  <span className="example-category-badge">{example.category}</span>
                </div>
                <h3 className="example-title">{example.title}</h3>
                <p className="example-description">{example.description}</p>
                
                <div className="use-case-box">
                  <div className="use-case-label">💡 Use Case</div>
                  <p className="use-case-text">{example.useCase}</p>
                </div>
              </div>

              <div className="example-code-section">
                {/* Code */}
                <div className="code-block">
                  <div className="code-header">
                    <div className="code-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <span className="code-file">LoadTest.java</span>
                    <button 
                      className="copy-btn"
                      onClick={() => copyToClipboard(example.code, example.id)}
                    >
                      {copiedIndex === example.id ? (
                        <>
                          <span className="check-icon">✓</span> Copied
                        </>
                      ) : (
                        <>
                          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                          </svg>
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="code-content">
                    <code>{example.code}</code>
                  </pre>
                </div>

                {/* Output */}
                <div className="output-block">
                  <div className="output-header">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm14-1a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V2z"/>
                      <path d="M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                    <span>Console Output</span>
                  </div>
                  <pre className="output-content">
                    <code>{example.output}</code>
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="tips-section">
          <h3 className="tips-title">💡 Pro Tips</h3>
          <div className="tips-grid">
            <div className="tip-card">
              <div className="tip-icon">🎯</div>
              <h4 className="tip-title">Start Small</h4>
              <p className="tip-text">Begin with low load (10-20 requests) to establish baseline performance before ramping up.</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">📊</div>
              <h4 className="tip-title">Use printSummary()</h4>
              <p className="tip-text">Call result.printSummary() to get formatted console output with all key metrics automatically.</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">⚡</div>
              <h4 className="tip-title">Test Realistic Scenarios</h4>
              <p className="tip-text">Simulate actual user behavior patterns, not just maximum theoretical load.</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">🔄</div>
              <h4 className="tip-title">Automate in CI/CD</h4>
              <p className="tip-text">Run performance tests automatically on every deploy to catch regressions instantly.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Examples;