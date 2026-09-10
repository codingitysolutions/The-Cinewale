import React from 'react';

function ComingSoon() {
  return (
    <div style={{
      backgroundColor: '#0a0a0a',
      color: '#f5f5f5',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{
        fontFamily: '"Playfair Display", serif',
        fontSize: '3rem',
        fontWeight: 'normal',
        letterSpacing: '4px',
        textTransform: 'uppercase',
        marginBottom: '20px',
        color: '#e6cc98' // Classic elegant gold/beige
      }}>
        The Cinewale
      </h1>
      <div style={{
        height: '1px',
        width: '60px',
        backgroundColor: '#e6cc98',
        margin: '0 auto 30px'
      }}></div>
      <h2 style={{
        fontSize: '1.2rem',
        fontWeight: '300',
        letterSpacing: '2px',
        marginBottom: '15px'
      }}>
        Something beautiful is in the works.
      </h2>
      <p style={{
        fontSize: '0.9rem',
        color: '#888',
        maxWidth: '400px',
        lineHeight: '1.6'
      }}>
        We are currently upgrading our portfolio to bring you a more cinematic experience. We'll be back online shortly.
      </p>
    </div>
  );
}

export default ComingSoon;
