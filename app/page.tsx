import React from 'react'
import FinancialPlanningPage from '../components/FinancialPlanningPage'

/**
 * Home page component
 * This is the main landing page that renders the FinancialPlanningPage component
 * 
 * @returns JSX element containing the complete financial planning page
 */
export default function Home() {
  return (
    <div>
      <FinancialPlanningPage />
    </div>
  )
}
