'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        {/* Coffee Spill Illustration */}
        <div className="w-24 h-24 mx-auto mb-6 relative">
          <div className="absolute inset-0 rounded-full bg-coffee-700 opacity-20"></div>
          <div className="absolute inset-2 rounded-full bg-coffee-600 opacity-40"></div>
          <div className="absolute inset-4 rounded-full bg-coffee-500 opacity-60"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl">
            ☕
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Oops! Something Spilled
        </h1>
        
        <p className="text-muted-foreground mb-6">
          Don't worry, we're cleaning up the mess. Even the best coffee machines need maintenance sometimes.
        </p>
        
        <div className="space-y-3">
          <Button 
            onClick={reset}
            className="w-full bg-coffee-700 hover:bg-coffee-600 text-white"
          >
            Try Brewing Again
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => window.location.href = '/'}
            className="w-full border-coffee-300 text-coffee-700 hover:bg-coffee-50"
          >
            Return to Homepage
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground mt-6">
          If the problem persists, please contact our support team.
        </p>
      </div>
    </div>
  )
}
