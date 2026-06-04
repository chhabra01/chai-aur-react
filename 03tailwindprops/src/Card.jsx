import React from 'react'

const imageUrl = 'https://images.pexels.com/photos/35408819/pexels-photo-35408819.jpeg'

export default function Card(props) {
    console.log(props);
    return (
        <div style={{ maxWidth: 360, borderRadius: 12, overflow: 'hidden', boxShadow: '0 8px 28px rgba(2,6,23,0.12)', background: '#fff', fontFamily: 'Inter, ui-sans-serif, system-ui', margin: '0 auto' }}>
            <div style={{ height: 220, overflow: 'hidden' }}>
                <img src={imageUrl} alt="Card visual" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ padding: 16 }}>
                <h3 style={{ margin: 0, marginBottom: 8, fontSize: 18, color: '#0f172a' }}>Beautiful Landscape</h3>
                <p style={{ margin: 0, marginBottom: 12, color: '#6b7280', fontSize: 14 }}>A short, elegant description that complements the image and invites users to learn more.</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 700, color: '#111827' }}>From $29</span>
                    <button style={{ background: 'linear-gradient(90deg,#06b6d4,#3b82f6)', color: '#fff', border: 'none', padding: '8px 14px', borderRadius: 8, cursor: 'pointer' }}>
                        Book
                    </button>
                </div>
            </div>
        </div>
    )
}
