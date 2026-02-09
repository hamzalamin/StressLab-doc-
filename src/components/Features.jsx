import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Annotation-Based',
      description: 'Write load tests with simple @LoadTest annotations. No complex configuration files needed.',
      color: 'var(--primary)'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Execute thousands of requests per second with optimized concurrent execution.',
      color: 'var(--accent)'
    },
    {
      icon: '📊',
      title: 'Rich Metrics',
      description: 'Get detailed performance metrics including response times, throughput, and status distributions.',
      color: 'var(--success)'
    },
    {
      icon: '🔄',
      title: 'Duration & Request Based',
      description: 'Run tests for a specific duration or number of requests. Your choice.',
      color: 'var(--primary-light)'
    },
    {
      icon: '🧪',
      title: 'JUnit 5 Native',
      description: 'Seamless integration with JUnit 5. Use alongside your existing unit tests.',
      color: 'var(--warning)'
    },
    {
      icon: '📈',
      title: 'Auto Summary Reports',
      description: 'Automatic console output with all key metrics. No manual parsing required.',
      color: 'var(--danger)'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="features-container">
        <div className="features-header">
          <span className="section-badge">Why Choose Us</span>
          <h2 className="section-title">
            Built for <span className="gradient-text">Developer Productivity</span>
          </h2>
          <p className="section-description">
            Stop fighting with complex load testing tools. Write performance tests as easily as unit tests.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div className="feature-icon" style={{ '--color': feature.color }}>
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison highlight */}
        <div className="comparison-box">
          <div className="comparison-item">
            <div className="comparison-label old">JMeter/Gatling</div>
            <pre className="comparison-code">
{`<!-- 50+ lines of XML -->
<ThreadGroup>
  <elementProp>
    <HTTPSamplerProxy>
      ...
    </HTTPSamplerProxy>
  </elementProp>
</ThreadGroup>`}
            </pre>
          </div>

          <div className="comparison-arrow">→</div>

          <div className="comparison-item">
            <div className="comparison-label new">API Stress Lab</div>
            <pre className="comparison-code">
{`@Test
@LoadTest(
    url = "/api/users",
    threads = 50,
    duration = 30
)
void test(LoadTestResultDto r) {
    // Done! ✨
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;