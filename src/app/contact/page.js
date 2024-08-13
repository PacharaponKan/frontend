import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ComingSoon() {
  return (
    <>
    <div style={styles.container}>
      <h1 style={styles.title}>COMING SOON</h1>
      <p style={styles.text}>
        We will be celebrating the launch of our new site very soon!
      </p>
      <button style={styles.button}>Notify Me!</button>
      <footer style={styles.footer}>
        <p>© 2023 by "Coming Soon". Proudly created with Next.js</p>
        <div style={styles.socials}>
          <a href="#" style={styles.socialIcon}>Facebook</a>
          <a href="#" style={styles.socialIcon}>Twitter</a>
          <a href="#" style={styles.socialIcon}>Instagram</a>
        </div>
      </footer>
    </div></>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundImage: 'url("/asset/img/Bg1.png")', // Update with your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    color: '#fff', // Ensure text is visible on the background
  },
  title: {
    fontSize: '4rem',
    fontWeight: 'bold',
    margin: '0',
  },
  text: {
    marginTop: '10px',
    fontSize: '1.25rem',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#00c4cc',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  footer: {
    position: 'absolute',
    bottom: '20px',
    textAlign: 'center',
    width: '100%',
  },
  socials: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  socialIcon: {
    color: '#fff', // Update to white for better contrast
    textDecoration: 'none',
  },
};

