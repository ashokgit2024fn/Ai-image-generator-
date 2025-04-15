import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css"; // Import external CSS file

function ResponsiveAutoExample() {
  const [posts, setPosts] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track hovered post

  useEffect(() => {
    fetch("http://localhost:3000/api/getAllPosts")
      .then((res) => res.json())
      .then((data) => setPosts(data.data || []))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <>
      {posts.length > 0 ? (
        <Container className="p-2 bg-secondary">
          {posts.reduce((acc, post, index) => {
            if (index % 5 === 0) acc.push([]);
            acc[acc.length - 1].push(post);
            return acc;
          }, []).map((bundle, bundleIndex) => (
            <div key={bundleIndex} className="mb-5">
              {/* First Row: 8 + 4 */}
              <Row className="mb-4">
                {bundle[0] && (
                  <Col sm={8}>
                    <div 
                      className="post-card"
                      onMouseEnter={() => setHoveredIndex(`${bundleIndex}-0`)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <img src={bundle[0].photo} alt="Post" />
                      {hoveredIndex === `${bundleIndex}-0` && (
                        <div className="hover-content">
                          <p><strong>{bundle[0].name}</strong></p>
                          <p>
                            {bundle[0].prompt}
                            <span 
                              className="btn btn-primary"
                              onClick={(e) => {
                                e.stopPropagation();
                                const link = document.createElement("a");
                                link.href = bundle[0].photo;
                                link.download = bundle[0].name || "download.jpg";
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                              }}
                            >
                              Download
                            </span>
                          </p>
                        </div>
                      )}
                    </div>
                  </Col>
                )}
                {bundle[1] && (
                  <Col sm={4}>
                    <div 
                      className="post-card"
                      onMouseEnter={() => setHoveredIndex(`${bundleIndex}-1`)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <img src={bundle[1].photo} alt="Post" />
                      {hoveredIndex === `${bundleIndex}-1` && (
                        <div className="hover-content">
                          <p><strong>{bundle[1].name}</strong></p>
                          <p>
                            {bundle[1].prompt}
                            <span 
                              className="btn btn-primary"
                              onClick={(e) => {
                                e.stopPropagation();
                                const link = document.createElement("a");
                                link.href = bundle[1].photo;
                                link.download = bundle[1].name || "download.jpg";
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                              }}
                            >
                              Download
                            </span>
                          </p>
                        </div>
                      )}
                    </div>
                  </Col>
                )}
              </Row>

              {/* Second Row: 4 + 4 + 4 */}
              <Row>
                {bundle.slice(2, 5).map((post, colIndex) => (
                  <Col sm={4} key={colIndex}>
                    <div 
                      className="post-card"
                      onMouseEnter={() => setHoveredIndex(`${bundleIndex}-${colIndex + 2}`)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <img src={post.photo} alt="Post" />
                      {hoveredIndex === `${bundleIndex}-${colIndex + 2}` && (
                        <div className="hover-content">
                          <p><strong>{post.name}</strong></p>
                          <p>
                            {post.prompt}
                            <span 
                              className="btn btn-primary"
                              onClick={(e) => {
                                e.stopPropagation();
                                const link = document.createElement("a");
                                link.href = post.photo;
                                link.download = post.name || "download.jpg";
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                              }}
                            >
                              Download
                            </span>
                          </p>
                        </div>
                      )}
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Container>
      ) : (
        <div className="alert alert-primary" role="alert">
          No posts available. Please check back later!
        </div>
      )}
    </>
  );
}

export default ResponsiveAutoExample;
