import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [metrics, setMetrics] = useState({
    requests: 0,
    responseTime: 0,
    throughput: 0
  });

  const [copied, setCopied] = useState(false);

  const codeExample = `@Test
@LoadTest(
    url = "https://api.example.com/users",
    method = GET,
    threads = 50,
    duration = 30
)
public void testApiPerformance(LoadTestResultDto result) {
    assertThat(result.averageResponseTimeMs())
        .isLessThan(200);
    
    assertThat(result.successRate())
        .isGreaterThan(0.99);
}`;

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        requests: prev.requests < 1000 ? prev.requests + 47 : 1000,
        responseTime: prev.responseTime < 125 ? prev.responseTime + 5 : 125,
        throughput: prev.throughput < 850 ? prev.throughput + 34 : 850
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="hero">
      <div className="hero-grid"></div>
      
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-icon">⚡</span>
          <span>JUnit 5 Native Integration</span>
        </div>

        <h1 className="hero-title">
          Stress Test Your APIs
          <br />
          <span className="gradient-text">Like a Pro</span>
        </h1>

        <p className="hero-description">
          The most developer-friendly load testing library for Java. 
          Write performance tests as easily as unit tests with simple annotations.
        </p>

        <div className="hero-cta">
          <button className="btn btn-primary">
            Get Started
            <span className="btn-arrow">→</span>
          </button>
          <a 
            href="https://github.com/hamzalamin/API-StressLab"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            View on GitHub
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </div>

        <div className="hero-metrics">
          <div className="metric">
            <div className="metric-value">{metrics.requests}</div>
            <div className="metric-label">Requests/sec</div>
          </div>
          <div className="metric">
            <div className="metric-value success">{metrics.responseTime}ms</div>
            <div className="metric-label">Avg Response</div>
          </div>
          <div className="metric">
            <div className="metric-value warning">{metrics.throughput}</div>
            <div className="metric-label">Throughput</div>
          </div>
        </div>
      </div>

      <div className="hero-code">
        <div className="code-window">
          <div className="code-header">
            <div className="code-header-left">
              <div className="code-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="code-title">LoadTest.java</div>
            </div>
            <button 
              className="code-copy-btn"
              onClick={copyToClipboard}
              title="Copy to clipboard"
            >
              {copied ? (
                <span className="copy-btn-content">
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Copied!</span>
                </span>
              ) : (
                <span className="copy-btn-content">
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                  </svg>
                  <span>Copy</span>
                </span>
              )}
            </button>
          </div>
          <pre className="code-content">{codeExample}</pre>
        </div>
      </div>
    </div>
  );
};

export default Hero;