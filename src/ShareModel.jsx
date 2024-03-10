import React from 'react';

const ShareModal = ({ url, show, onClose }) => {
 if (!show) return null;

 const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
 };

 return (
    <div className="share-modal">
      <div className="share-modal-content">
        <p>Share this URL:</p>
        <input type="text" value={url} readOnly />
        <button onClick={copyToClipboard}>Copy Link</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
 );
};

export default ShareModal;
