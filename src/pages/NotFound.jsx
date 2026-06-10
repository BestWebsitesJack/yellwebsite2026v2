import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function NotFound() {
  return (
    <>
      <Helmet><title>404 — Page Not Found | Young Entrepreneur Landscaping</title></Helmet>
      <section style={{minHeight:'80vh',display:'flex',alignItems:'center',justifyContent:'center',padding:'64px',textAlign:'center'}}>
        <div>
          <span style={{fontFamily:'var(--font-display)',fontSize:'8rem',fontWeight:'300',color:'var(--green)',lineHeight:'1',display:'block'}}>404</span>
          <h1 style={{fontFamily:'var(--font-display)',fontSize:'2.4rem',fontWeight:'300',margin:'16px 0 20px'}}>Page Not Found</h1>
          <p style={{color:'var(--text-soft)',marginBottom:'32px'}}>The page you're looking for doesn't exist or has been moved.</p>
          <Link to="/" className="btn-main">Back to Homepage</Link>
        </div>
      </section>
    </>
  )
}
