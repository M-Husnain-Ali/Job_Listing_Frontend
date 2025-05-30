"use client"

import { Component } from "react"

class Header extends Component {
  render() {
    const { onPostJobClick, onScrapeJobsClick, isScrapingJobs } = this.props

    return (
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <span className="logo-icon">🏢</span>
              <span className="logo-text">JobHunt Pro</span>
            </div>
            <nav className="nav">
              <button className="btn btn-outline" onClick={onPostJobClick}>
                Post A Job
              </button>
              <button className="btn btn-primary" onClick={onScrapeJobsClick} disabled={isScrapingJobs}>
                {isScrapingJobs ? "Scraping..." : "Scrape Jobs"}
              </button>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
