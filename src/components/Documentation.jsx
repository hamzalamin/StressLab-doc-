import { useState, useEffect } from 'react';
import './Documentation.css';

const Documentation = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [searchQuery, setSearchQuery] = useState('');

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: '📖',
      subsections: [
        { id: 'what-is', title: 'What is API Stress Lab?' },
        { id: 'why-use', title: 'Why Use It?' },
        { id: 'key-features', title: 'Key Features' },
      ]
    },
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: '🚀',
      subsections: [
        { id: 'prerequisites', title: 'Prerequisites' },
        { id: 'installation', title: 'Installation' },
        { id: 'first-test', title: 'Your First Test' },
        { id: 'project-setup', title: 'Project Setup' },
      ]
    },
    {
      id: 'core-concepts',
      title: 'Core Concepts',
      icon: '🧠',
      subsections: [
        { id: 'annotations', title: 'Annotations' },
        { id: 'load-types', title: 'Load Test Types' },
        { id: 'result-dto', title: 'LoadTestResultDto' },
        { id: 'http-methods', title: 'HTTP Methods' },
      ]
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      icon: '📚',
      subsections: [
        { id: 'loadtest-annotation', title: '@LoadTest' },
        { id: 'extension', title: 'LoadTestExtension' },
        { id: 'result-fields', title: 'Result Fields' },
        { id: 'enums', title: 'Enums' },
      ]
    },
    {
      id: 'guides',
      title: 'Guides',
      icon: '📝',
      subsections: [
        { id: 'basic-testing', title: 'Basic Load Testing' },
        { id: 'duration-testing', title: 'Duration-Based Tests' },
        { id: 'assertions', title: 'Writing Assertions' },
        { id: 'ci-cd', title: 'CI/CD Integration' },
      ]
    },
    {
      id: 'best-practices',
      title: 'Best Practices',
      icon: '⭐',
      subsections: [
        { id: 'test-design', title: 'Test Design' },
        { id: 'performance-baselines', title: 'Performance Baselines' },
        { id: 'common-pitfalls', title: 'Common Pitfalls' },
        { id: 'troubleshooting', title: 'Troubleshooting' },
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced Topics',
      icon: '🔬',
      subsections: [
        { id: 'custom-config', title: 'Custom Configuration' },
        { id: 'metrics-analysis', title: 'Metrics Analysis' },
        { id: 'performance-tuning', title: 'Performance Tuning' },
        { id: 'integration-patterns', title: 'Integration Patterns' },
      ]
    },
    {
      id: 'faq',
      title: 'FAQ',
      icon: '❓',
      subsections: [
        { id: 'general', title: 'General Questions' },
        { id: 'technical', title: 'Technical Questions' },
        { id: 'comparison', title: 'Comparison with Other Tools' },
      ]
    }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section id="docs" className="documentation">
      <div className="docs-container">
        
        {/* Sidebar Navigation */}
        <aside className="docs-sidebar">
          <div className="sidebar-header">
            <h3>Documentation</h3>
            <div className="search-box">
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
              <input
                type="text"
                placeholder="Search docs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <nav className="sidebar-nav">
            {sections.map((section) => (
              <div key={section.id} className="nav-section">
                <button
                  className={`nav-section-title ${activeSection === section.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(section.id)}
                >
                  <span className="nav-icon">{section.icon}</span>
                  {section.title}
                </button>
                <div className="nav-subsections">
                  {section.subsections.map((sub) => (
                    <button
                      key={sub.id}
                      className={`nav-subsection ${activeSection === sub.id ? 'active' : ''}`}
                      onClick={() => scrollToSection(sub.id)}
                    >
                      {sub.title}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="docs-content">
          
          {/* Introduction Section */}
          <section id="introduction" className="doc-section">
            <h1 className="doc-title">API Stress Lab Documentation</h1>
            <p className="doc-subtitle">
              Complete guide to load testing your APIs with JUnit 5 and annotation-based configuration
            </p>

            <div id="what-is" className="doc-subsection">
              <h2>What is API Stress Lab?</h2>
              <p>
                API Stress Lab is a Java library for load testing APIs, designed to integrate seamlessly with JUnit 5. 
                It allows tests to be defined using annotations such as <code>@LoadTest</code> for individual tests and <code>@EnableLoadTesting</code> for enabling the framework.
              </p>
              <div className="info-box">
                <div className="info-icon">💡</div>
                <div>
                  <strong>Important:</strong> Always add <code>@EnableLoadTesting</code> to your test classes to activate all features.
                </div>
              </div>
            </div>

            <div id="why-use" className="doc-subsection">
              <h2>Why Use API Stress Lab?</h2>
              <ul className="feature-list">
                <li>
                  <span className="list-icon">✓</span>
                  <div>
                    <strong>Simple Annotation-Based API</strong>
                    <p>Minimal boilerplate, everything is configured through annotations.</p>
                  </div>
                </li>
                <li>
                  <span className="list-icon">✓</span>
                  <div>
                    <strong>Native JUnit 5 Integration</strong>
                    <p>Runs as part of standard JUnit 5 tests.</p>
                  </div>
                </li>
                <li>
                  <span className="list-icon">✓</span>
                  <div>
                    <strong>Rich Performance Metrics</strong>
                    <p>Provides total requests, successful requests, average response times, throughput, and success rate.</p>
                  </div>
                </li>
                <li>
                  <span className="list-icon">✓</span>
                  <div>
                    <strong>Flexible Testing</strong>
                    <p>Supports both request-count-based and duration-based load tests.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div id="key-features" className="doc-subsection">
              <h2>Key Features</h2>
              <div className="feature-grid">
                <div className="feature-card-doc">
                  <h4>⚡ Fast Execution</h4>
                  <p>Execute thousands of requests per second with optimized concurrent execution.</p>
                </div>
                <div className="feature-card-doc">
                  <h4>📊 Detailed Metrics</h4>
                  <p>Real-time metrics including response times, success rates, and throughput.</p>
                </div>
                <div className="feature-card-doc">
                  <h4>🎯 Flexible Configuration</h4>
                  <p>Request-based and duration-based load tests with multiple threads.</p>
                </div>
                <div className="feature-card-doc">
                  <h4>🔄 CI/CD Ready</h4>
                  <p>Easy integration into CI/CD pipelines for automated performance testing.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Getting Started Section */}
          <section id="getting-started" className="doc-section">
            <h1 className="doc-title">Getting Started</h1>

            <div id="prerequisites" className="doc-subsection">
              <h2>Prerequisites</h2>
              <p>Before you begin, ensure you have:</p>
              <ul className="requirement-list">
                <li>Java 11 or higher</li>
                <li>Maven 3.6+ or Gradle 7.0+</li>
                <li>JUnit 5.8 or higher</li>
              </ul>
            </div>

            <div id="installation" className="doc-subsection">
              <h2>Installation</h2>
              <p>Add the dependency to your project:</p>
              
              <h3>Maven</h3>
              <div className="code-block-doc">
                <div className="code-header">
                  <button 
                    onClick={() => copyToClipboard(`<dependency>\n    <groupId>com.wora</groupId>\n    <artifactId>api-stress-lab</artifactId>\n    <version>1.0.0</version>\n    <scope>test</scope>\n</dependency>`)}
                    className="copy-btn"
                    title="Copy to clipboard"
                  >
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                    </svg>
                  </button>
                </div>
                <pre><code>{`<dependency>
    <groupId>com.wora</groupId>
    <artifactId>api-stress-lab</artifactId>
    <version>1.0.0</version>
    <scope>test</scope>
</dependency>`}</code></pre>
              </div>

              <h3>Gradle</h3>
              <div className="code-block-doc">
                <div className="code-header">
                  <button 
                    onClick={() => copyToClipboard(`testImplementation 'com.wora:api-stress-lab:1.0.0'`)}
                    className="copy-btn"
                    title="Copy to clipboard"
                  >
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                    </svg>
                  </button>
                </div>
                <pre><code>{`testImplementation 'com.wora:api-stress-lab:1.0.0'`}</code></pre>
              </div>
            </div>

            <div id="first-test" className="doc-subsection">
              <h2>Your First Test</h2>
              <p>Example using <code>@EnableLoadTesting</code> and a simple 10-request load test:</p>
              
              <div className="code-block-doc">
                <pre><code>{`@EnableLoadTesting
public class MyFirstLoadTest {

    @Test
    @LoadTest(
        url = "https://jsonplaceholder.typicode.com/posts/1",
        method = LoadHttpMethod.GET,
        requests = 10
    )
    public void testSimpleLoad(LoadTestResultDto result) {
        result.printSummary();
        
        assertThat(result.totalRequests()).isEqualTo(10);
        assertThat(result.successfulRequests()).isEqualTo(10);
    }
}`}</code></pre>
              </div>
            </div>

            <div id="project-setup" className="doc-subsection">
              <h2>Project Setup</h2>
              <p>Recommended project structure:</p>
              
              <div className="code-block-doc">
                <pre><code>{`src/
├── main/
│   └── java/
└── test/
    └── java/
        └── com/
            └── example/
                └── loadtests/
                    ├── ApiLoadTest.java
                    └── PerformanceTest.java`}</code></pre>
              </div>
            </div>
          </section>

          {/* Core Concepts Section */}
          <section id="core-concepts" className="doc-section">
            <h1 className="doc-title">Core Concepts</h1>

            <div id="annotations" className="doc-subsection">
              <h2>Annotations</h2>
              <p>The main annotation is <code>@LoadTest</code> which configures your load test.</p>

              <div className="warning-box">
                <div className="warning-icon">⚠️</div>
                <div>
                  <strong>Important:</strong> Always use <code>@EnableLoadTesting</code> on your test class to enable load testing features.
                </div>
              </div>
            </div>

            <div id="load-types" className="doc-subsection">
              <h2>Load Test Types</h2>
              <p>API Stress Lab supports two types of load tests:</p>

              <h3>Request-Based Tests</h3>
              <p>Runs a fixed number of requests.</p>
              <div className="code-block-doc">
                <pre><code>{`@LoadTest(
    url = "https://api.example.com/data",
    requests = 100  // Send exactly 100 requests
)`}</code></pre>
              </div>

              <h3>Duration-Based Tests</h3>
              <p>Runs requests for a specific duration with multiple threads.</p>
              <div className="code-block-doc">
                <pre><code>{`@LoadTest(
    url = "https://api.example.com/data",
    threads = 50,
    duration = 30  // Run for 30 seconds
)`}</code></pre>
              </div>
            </div>

            <div id="result-dto" className="doc-subsection">
              <h2>LoadTestResultDto</h2>
              <p>The result object contains performance metrics from your test:</p>

              <table className="api-table">
                <thead>
                  <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>totalRequests()</code></td>
                    <td>int</td>
                    <td>Total number of requests executed</td>
                  </tr>
                  <tr>
                    <td><code>successfulRequests()</code></td>
                    <td>int</td>
                    <td>Number of successful requests</td>
                  </tr>
                  <tr>
                    <td><code>averageResponseTimeMs()</code></td>
                    <td>double</td>
                    <td>Average response time in milliseconds</td>
                  </tr>
                  <tr>
                    <td><code>minResponseTimeMs()</code></td>
                    <td>double</td>
                    <td>Minimum response time</td>
                  </tr>
                  <tr>
                    <td><code>maxResponseTimeMs()</code></td>
                    <td>double</td>
                    <td>Maximum response time</td>
                  </tr>
                  <tr>
                    <td><code>requestsPerSecond()</code></td>
                    <td>double</td>
                    <td>Throughput (requests per second)</td>
                  </tr>
                  <tr>
                    <td><code>statusCodeDistribution()</code></td>
                    <td>Map&lt;Integer, Integer&gt;</td>
                    <td>Distribution of HTTP status codes</td>
                  </tr>
                  <tr>
                    <td><code>printSummary()</code></td>
                    <td>void</td>
                    <td>Prints formatted summary to console</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div id="http-methods" className="doc-subsection">
              <h2>HTTP Methods</h2>
              <p>Supported methods via <code>LoadHttpMethod</code> enum:</p>
              
              <div className="method-grid">
                <div className="method-card">
                  <code>LoadHttpMethod.GET</code>
                  <p>Read operations</p>
                </div>
                <div className="method-card">
                  <code>LoadHttpMethod.POST</code>
                  <p>Create operations</p>
                </div>
                <div className="method-card">
                  <code>LoadHttpMethod.PUT</code>
                  <p>Update operations</p>
                </div>
                <div className="method-card">
                  <code>LoadHttpMethod.DELETE</code>
                  <p>Delete operations</p>
                </div>
              </div>
            </div>
          </section>

          {/* API Reference Section */}
          <section id="api-reference" className="doc-section">
            <h1 className="doc-title">API Reference</h1>

            <div id="loadtest-annotation" className="doc-subsection">
              <h2>@LoadTest Annotation</h2>
              <p>Complete parameter reference:</p>

              <table className="api-table">
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Type</th>
                    <th>Required</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>url</code></td>
                    <td>String</td>
                    <td>✓</td>
                    <td>-</td>
                    <td>Target URL to test</td>
                  </tr>
                  <tr>
                    <td><code>method</code></td>
                    <td>LoadHttpMethod</td>
                    <td></td>
                    <td>GET</td>
                    <td>HTTP method to use</td>
                  </tr>
                  <tr>
                    <td><code>requests</code></td>
                    <td>int</td>
                    <td></td>
                    <td>1</td>
                    <td>Number of requests (if not using duration)</td>
                  </tr>
                  <tr>
                    <td><code>threads</code></td>
                    <td>int</td>
                    <td></td>
                    <td>1</td>
                    <td>Number of concurrent threads</td>
                  </tr>
                  <tr>
                    <td><code>duration</code></td>
                    <td>int</td>
                    <td></td>
                    <td>0</td>
                    <td>Duration in seconds (0 = request-based)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div id="extension" className="doc-subsection">
              <h2>LoadTestExtension</h2>
              <p>JUnit 5 extension that executes load tests and injects results.</p>
              <div className="code-block-doc">
                <pre><code>{`@EnableLoadTesting
public class MyLoadTest {
    // Your tests here
}`}</code></pre>
              </div>
            </div>

            <div id="result-fields" className="doc-subsection">
              <h2>Result Fields</h2>
              <p>Complete field reference with examples:</p>
              
              <div className="code-block-doc">
                <pre><code>{`LoadTestResultDto result = ...;

int total = result.totalRequests();
int successful = result.successfulRequests();
double avgTime = result.averageResponseTimeMs();
double minTime = result.minResponseTimeMs();
double maxTime = result.maxResponseTimeMs();
double rps = result.requestsPerSecond();
Map<Integer, Integer> codes = result.statusCodeDistribution();

// Print formatted summary
result.printSummary();`}</code></pre>
              </div>
            </div>

            <div id="enums" className="doc-subsection">
              <h2>Enums</h2>
              
              <h3>LoadHttpMethod</h3>
              <div className="code-block-doc">
                <pre><code>{`public enum LoadHttpMethod {
    GET,
    POST,
    PUT,
    DELETE,
    PATCH,
    HEAD,
    OPTIONS
}`}</code></pre>
              </div>
            </div>
          </section>

          {/* Guides Section */}
          <section id="guides" className="doc-section">
            <h1 className="doc-title">Guides</h1>

            <div id="basic-testing" className="doc-subsection">
              <h2>Basic Load Testing</h2>
              <p>Simple example testing a GET endpoint:</p>
              
              <div className="code-block-doc">
                <pre><code>{`@EnableLoadTesting
public class BasicLoadTest {

    @Test
    @LoadTest(
        url = "https://api.example.com/users",
        requests = 50
    )
    public void testUserEndpoint(LoadTestResultDto result) {
        result.printSummary();
        
        assertThat(result.successfulRequests())
            .isEqualTo(50);
        assertThat(result.averageResponseTimeMs())
            .isLessThan(500);
    }
}`}</code></pre>
              </div>
            </div>

            <div id="duration-testing" className="doc-subsection">
              <h2>Duration-Based Tests</h2>
              <p>Testing sustained load over time:</p>
              
              <div className="code-block-doc">
                <pre><code>{`@Test
@LoadTest(
    url = "https://api.example.com/products",
    threads = 20,
    duration = 30  // 30 seconds
)
public void testSustainedLoad(LoadTestResultDto result) {
    result.printSummary();
    
    assertThat(result.requestsPerSecond())
        .isGreaterThan(50);
}`}</code></pre>
              </div>
            </div>

            <div id="assertions" className="doc-subsection">
              <h2>Writing Assertions</h2>
              <p>Example assertions for validating performance:</p>
              
              <div className="code-block-doc">
                <pre><code>{`@Test
@LoadTest(url = "...", requests = 100)
public void testWithAssertions(LoadTestResultDto result) {
    // Success rate
    double successRate = (double) result.successfulRequests() 
                       / result.totalRequests();
    assertThat(successRate).isGreaterThan(0.99);
    
    // Response times
    assertThat(result.averageResponseTimeMs()).isLessThan(300);
    assertThat(result.maxResponseTimeMs()).isLessThan(1000);
    
    // Throughput
    assertThat(result.requestsPerSecond()).isGreaterThan(50);
    
    // Status codes
    assertThat(result.statusCodeDistribution())
        .containsKey(200);
}`}</code></pre>
              </div>
            </div>

            <div id="ci-cd" className="doc-subsection">
              <h2>CI/CD Integration</h2>
              <p>Integrate load tests into your CI/CD pipeline:</p>

              <h3>GitHub Actions Example</h3>
              <div className="code-block-doc">
                <pre><code>{`name: Performance Tests

on: [push, pull_request]

jobs:
  performance:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-java@v2
        with:
          java-version: '11'
      - name: Run Load Tests
        run: mvn test -Dtest=**/*LoadTest`}</code></pre>
              </div>
            </div>
          </section>

          {/* Best Practices Section */}
          <section id="best-practices" className="doc-section">
            <h1 className="doc-title">Best Practices</h1>

            <div id="test-design" className="doc-subsection">
              <h2>Test Design</h2>
              <p>Follow these guidelines for effective load testing:</p>
              
              <div className="success-box">
                <div className="success-icon">✓</div>
                <div>
                  <strong>Do:</strong> Start with small load and gradually increase. Use descriptive test names and keep test methods focused.
                </div>
              </div>

              <div className="error-box">
                <div className="error-icon">✗</div>
                <div>
                  <strong>Don't:</strong> Start with maximum load immediately. This can overwhelm your system and give misleading results.
                </div>
              </div>
            </div>

            <div id="performance-baselines" className="doc-subsection">
              <h2>Performance Baselines</h2>
              <p>Establish and track performance baselines:</p>
              <ul className="checklist">
                <li>Measure response times under normal load</li>
                <li>Track success rates over time</li>
                <li>Document acceptable performance ranges</li>
                <li>Compare results across releases</li>
              </ul>
            </div>

            <div id="common-pitfalls" className="doc-subsection">
              <h2>Common Pitfalls</h2>
              
              <div className="pitfall-card">
                <h4>❌ Forgetting @EnableLoadTesting</h4>
                <p>Always add <code>@EnableLoadTesting</code> to your test class, otherwise tests won't execute properly.</p>
              </div>

              <div className="pitfall-card">
                <h4>❌ Testing Production Endpoints</h4>
                <p>Never run load tests against production. Always use staging or development environments.</p>
              </div>

              <div className="pitfall-card">
                <h4>❌ Ignoring Failed Requests</h4>
                <p>Always check the success rate. High failure rates indicate problems that need investigation.</p>
              </div>
            </div>

            <div id="troubleshooting" className="doc-subsection">
              <h2>Troubleshooting</h2>
              
              <h3>High Response Times</h3>
              <p>Check network latency, server capacity, and thread configuration.</p>
              
              <h3>Request Failures</h3>
              <p>Verify URL accessibility, check status code distribution, and ensure proper authentication.</p>
              
              <h3>Connection Timeouts</h3>
              <p>Reduce thread count or increase timeout settings. Check network connectivity.</p>
            </div>
          </section>

          {/* Advanced Section */}
          <section id="advanced" className="doc-section">
            <h1 className="doc-title">Advanced Topics</h1>

            <div id="custom-config" className="doc-subsection">
              <h2>Custom Configuration</h2>
              <p>Configure default settings for your load tests using properties or configuration classes.</p>
            </div>

            <div id="metrics-analysis" className="doc-subsection">
              <h2>Metrics Analysis</h2>
              <p>Analyze <code>LoadTestResultDto</code> output to identify bottlenecks and performance trends.</p>
              
              <div className="code-block-doc">
                <pre><code>{`@Test
@LoadTest(url = "...", threads = 50, duration = 60)
public void analyzeMetrics(LoadTestResultDto result) {
    result.printSummary();
    
    // Calculate success rate
    double successRate = (double) result.successfulRequests() 
                       / result.totalRequests();
    
    // Analyze response time distribution
    double avgTime = result.averageResponseTimeMs();
    double maxTime = result.maxResponseTimeMs();
    
    // Check for performance degradation
    assertThat(maxTime).isLessThan(avgTime * 3);
}`}</code></pre>
              </div>
            </div>

            <div id="performance-tuning" className="doc-subsection">
              <h2>Performance Tuning</h2>
              <p>Adjust threads and request count to match production load scenarios. Monitor system resources during tests.</p>
            </div>

            <div id="integration-patterns" className="doc-subsection">
              <h2>Integration Patterns</h2>
              <p>Combine <code>@LoadTest</code> with other JUnit 5 extensions for advanced testing scenarios.</p>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="doc-section">
            <h1 className="doc-title">Frequently Asked Questions</h1>

            <div id="general" className="doc-subsection">
              <h2>General Questions</h2>
              
              <div className="faq-item">
                <h3>What is API Stress Lab?</h3>
                <p>API Stress Lab is a Java library for load testing APIs with JUnit 5 integration, using simple annotations to configure tests.</p>
              </div>

              <div className="faq-item">
                <h3>Do I need Spring Boot?</h3>
                <p>No, API Stress Lab works in any Java project with JUnit 5. Spring Boot is not required.</p>
              </div>

              <div className="faq-item">
                <h3>What Java versions are supported?</h3>
                <p>Java 11 and higher are supported.</p>
              </div>
            </div>

            <div id="technical" className="doc-subsection">
              <h2>Technical Questions</h2>
              
              <div className="faq-item">
                <h3>How do I test POST requests?</h3>
                <p>Use <code>method = LoadHttpMethod.POST</code> in your <code>@LoadTest</code> annotation.</p>
              </div>

              <div className="faq-item">
                <h3>Can I use multiple endpoints in one test class?</h3>
                <p>Yes, each method annotated with <code>@LoadTest</code> runs independently.</p>
              </div>

              <div className="faq-item">
                <h3>How accurate are the metrics?</h3>
                <p>Metrics are measured with millisecond precision and include network latency.</p>
              </div>
            </div>

            <div id="comparison" className="doc-subsection">
              <h2>Comparison with Other Tools</h2>
              
              <div className="faq-item">
                <h3>How does it compare to JMeter?</h3>
                <p>API Stress Lab is simpler and integrates natively with JUnit 5, while JMeter requires separate configuration files and GUI.</p>
              </div>

              <div className="faq-item">
                <h3>What about Gatling?</h3>
                <p>Unlike Gatling which uses Scala DSL, API Stress Lab uses Java annotations making it more accessible to Java developers.</p>
              </div>
            </div>
          </section>

        </main>

        {/* Table of Contents (Right Sidebar) */}
        <aside className="docs-toc">
          <h4>On This Page</h4>
          <nav className="toc-nav">
            <a href="#what-is" className="toc-link">What is API Stress Lab?</a>
            <a href="#why-use" className="toc-link">Why Use It?</a>
            <a href="#key-features" className="toc-link">Key Features</a>
          </nav>
        </aside>

      </div>
    </section>
  );
};

export default Documentation;