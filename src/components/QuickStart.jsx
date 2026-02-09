import { useState } from 'react';
import './QuickStart.css';

const QuickStart = () => {
  const [copiedStep, setCopiedStep] = useState(null);
  const [selectedBuildTool, setSelectedBuildTool] = useState('maven');

  const copyToClipboard = (text, step) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(step);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  const dependencies = {
    maven: `<dependency>
  <groupId>com.wora</groupId>
  <artifactId>api-stress-lab</artifactId>
  <version>1.0.0</version>
  <scope>test</scope>
</dependency>`,
    gradle: `testImplementation 'com.wora:api-stress-lab:1.0.0'`
  };

  const basicExample = `import com.wora.apistresslab.annotations.EnableLoadTesting;
import com.wora.apistresslab.annotations.LoadTest;
import com.wora.apistresslab.models.DTOs.LoadTestResultDto;
import com.wora.apistresslab.models.enums.LoadHttpMethod;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

@EnableLoadTesting
class ApiLoadTest {

    @Test
    @LoadTest(
        url = "https://api.example.com/users",
        method = LoadHttpMethod.GET,
        requests = 100
    )
    void testBasicLoad(LoadTestResultDto result) {

        // One call prints the full report
        result.printSummary();

        assertThat(result.successfulRequests()).isEqualTo(100);
        assertThat(result.averageResponseTimeMs()).isLessThan(500);
    }
}`;

  const durationExample = `@Test
@LoadTest(
    url = "https://api.example.com/products",
    method = LoadHttpMethod.GET,
    threads = 50,
    duration = 30
)
void testDurationBased(LoadTestResultDto result) {

    result.printSummary();

    assertThat(result.requestsPerSecond()).isGreaterThan(100);
}`;

  const postExample = `@Test
@LoadTest(
    url = "https://api.example.com/orders",
    method = LoadHttpMethod.POST,
    threads = 20,
    duration = 15
)
void testPostEndpoint(LoadTestResultDto result) {

    result.printSummary();

    double successRate =
        result.successfulRequests() * 100.0 / result.totalRequests();

    assertThat(successRate).isGreaterThanOrEqualTo(95.0);
}`;

  return (
    <section id="quickstart" className="quickstart">
      <div className="quickstart-container">

        {/* Header */}
        <div className="quickstart-header">
          <span className="section-badge">Get Started</span>
          <h2 className="section-title">
            Up and Running in <span className="gradient-text">60 Seconds</span>
          </h2>
          <p className="section-description">
            Enable, annotate, run — API load testing made simple.
          </p>
        </div>

        {/* Step 1 */}
        <div className="step-card">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3 className="step-title">Add Dependency</h3>

            <div className="tabs">
              <button
                className={`tab ${selectedBuildTool === 'maven' ? 'active' : ''}`}
                onClick={() => setSelectedBuildTool('maven')}
              >
                Maven
              </button>
              <button
                className={`tab ${selectedBuildTool === 'gradle' ? 'active' : ''}`}
                onClick={() => setSelectedBuildTool('gradle')}
              >
                Gradle
              </button>
            </div>

            <div className="code-block">
              <pre className="code-content">
                <code>{dependencies[selectedBuildTool]}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="step-card">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3 className="step-title">Write Your Test</h3>
            <p className="step-description">
              Enable the framework with <code>@EnableLoadTesting</code> and
              annotate test methods with <code>@LoadTest</code>.
            </p>

            <p className="note">
              ℹ️ <strong>Tip:</strong> The framework automatically injects
              <code> LoadTestResultDto</code>.  
              Calling <code> result.printSummary()</code> is enough to get a full report.
            </p>

            <div className="code-block">
              <pre className="code-content">
                <code>{basicExample}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="step-card">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3 className="step-title">Run & Analyze</h3>

            <div className="code-block terminal">
              <pre className="code-content terminal-content">
                <code>{`$ mvn test

========== Load Test Summary ==========
Total Requests:      100
Successful:          100
Failed:              0
Average Response:    245ms
Min Response:        121ms
Max Response:        458ms
Requests/Second:     87.3
Status Codes:        {200=100}
======================================`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Advanced */}
        <div className="advanced-section">
          <h3 className="advanced-title">Advanced Examples</h3>

          <div className="examples-grid">
            <div className="example-card">
              <h4>⏱️ Duration-Based Test</h4>
              <pre className="code-content small">
                <code>{durationExample}</code>
              </pre>
            </div>

            <div className="example-card">
              <h4>📤 POST Request Test</h4>
              <pre className="code-content small">
                <code>{postExample}</code>
              </pre>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default QuickStart;
