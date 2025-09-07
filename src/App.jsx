import React, { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    brandAsset: null,
    avatarPicture: null,
    campaignBrief: '',
    targetMood: 'authentic'
  })
  
  const [uploadStatus, setUploadStatus] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')

  const handleFileUpload = (field, file) => {
    setFormData(prev => ({
      ...prev,
      [field]: file
    }))
    
    setUploadStatus(prev => ({
      ...prev,
      [field]: {
        status: 'success',
        message: `${file.name} uploaded successfully`
      }
    }))
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.brandAsset || !formData.campaignBrief) {
      setStatusMessage({
        type: 'error',
        message: 'Please upload a brand asset and provide a campaign brief.'
      })
      return
    }

    setIsSubmitting(true)
    setStatusMessage({
      type: 'info',
      message: 'Processing your brand video creation request...'
    })

    try {
      // Simulate API call to N8N workflow
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      setStatusMessage({
        type: 'success',
        message: 'Your brand video creation request has been submitted successfully! You will receive a confirmation email shortly.'
      })
      
      // Reset form
      setFormData({
        brandAsset: null,
        avatarPicture: null,
        campaignBrief: '',
        targetMood: 'authentic'
      })
      setUploadStatus({})
      
    } catch (error) {
      setStatusMessage({
        type: 'error',
        message: 'An error occurred while processing your request. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDrop = (e, field) => {
    e.preventDefault()
    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFileUpload(field, files[0])
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const FileUploadBox = ({ field, title, description, icon, optional = false }) => (
    <div
      className={`upload-box ${formData[field] ? 'active' : ''}`}
      onDrop={(e) => handleDrop(e, field)}
      onDragOver={handleDragOver}
      onClick={() => document.getElementById(field).click()}
    >
      <div className="upload-icon">{icon}</div>
      <div className="upload-text">
        {formData[field] ? formData[field].name : title}
      </div>
      <div className="upload-subtext">
        {formData[field] ? 'Click to change file' : description}
      </div>
      <input
        type="file"
        id={field}
        style={{ display: 'none' }}
        onChange={(e) => {
          if (e.target.files.length > 0) {
            handleFileUpload(field, e.target.files[0])
          }
        }}
        accept="image/*,.pdf,.doc,.docx"
      />
      {uploadStatus[field] && (
        <div className={`status-message status-${uploadStatus[field].status}`}>
          {uploadStatus[field].message}
        </div>
      )}
    </div>
  )

  return (
    <div className="container">
      <header className="header">
        <h1>AIavatar</h1>
        <p>Create professional brand videos with AI-powered avatars and advanced storytelling</p>
      </header>

      <div className="hero">
        <form onSubmit={handleSubmit}>
          <div className="upload-section">
            <FileUploadBox
              field="brandAsset"
              title="Upload Brand Asset"
              description="Click to upload or drag and drop your brand logo, image, or document"
              icon="📁"
            />
            <FileUploadBox
              field="avatarPicture"
              title="Upload Avatar Picture"
              description="Click to upload or drag and drop your avatar (optional)"
              icon="👤"
              optional={true}
            />
          </div>

          <div className="form-section">
            <div className="form-group">
              <label htmlFor="campaignBrief">Campaign Brief</label>
              <textarea
                id="campaignBrief"
                placeholder="Describe your brand story, campaign idea, or video concept. Include details about your target audience, key messaging, and desired outcomes..."
                value={formData.campaignBrief}
                onChange={(e) => handleInputChange('campaignBrief', e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="targetMood">Target Mood</label>
              <select
                id="targetMood"
                value={formData.targetMood}
                onChange={(e) => handleInputChange('targetMood', e.target.value)}
              >
                <option value="authentic">Authentic</option>
                <option value="professional">Professional</option>
                <option value="energetic">Energetic</option>
                <option value="inspirational">Inspirational</option>
                <option value="hopeful">Hopeful</option>
                <option value="informative">Informative</option>
                <option value="luxury">Luxury</option>
                <option value="friendly">Friendly</option>
              </select>
            </div>
          </div>

          {statusMessage && (
            <div className={`status-message status-${statusMessage.type}`}>
              {statusMessage.message}
            </div>
          )}

          <button
            type="submit"
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting && <span className="loading"></span>}
            {isSubmitting ? 'Processing...' : 'Create Brand Video'}
          </button>
        </form>
      </div>

      <div className="features">
        <div className="feature-card">
          <div className="feature-icon">🎭</div>
          <h3 className="feature-title">AI-Powered Avatars</h3>
          <p className="feature-description">
            Transform your brand identity with customizable AI avatars that represent your company's personality and values.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🎬</div>
          <h3 className="feature-title">Professional Video Creation</h3>
          <p className="feature-description">
            Generate high-quality brand videos using advanced AI technology and professional storytelling techniques.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🎯</div>
          <h3 className="feature-title">Brand Strategy Integration</h3>
          <p className="feature-description">
            Our AI analyzes your brand assets and creates videos that align with your marketing objectives and target audience.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3 className="feature-title">Fast Turnaround</h3>
          <p className="feature-description">
            Get professional brand videos in minutes, not weeks. Streamlined workflow from upload to final delivery.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🎨</div>
          <h3 className="feature-title">Customizable Styles</h3>
          <p className="feature-description">
            Choose from various moods and styles to match your brand's unique voice and messaging requirements.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3 className="feature-title">Analytics & Insights</h3>
          <p className="feature-description">
            Track performance and get insights on how your brand videos resonate with your target audience.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App