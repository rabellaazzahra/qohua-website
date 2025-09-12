'use client'

export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        {/* Coffee Bean Loading Animation */}
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full bg-coffee-700 animate-pulse"></div>
          <div className="absolute inset-2 rounded-full bg-coffee-500 animate-ping"></div>
          <div className="absolute inset-4 rounded-full bg-coffee-300"></div>
        </div>
        
        {/* Loading Text */}
        <h2 className="text-xl font-semibold text-foreground mb-2">
          Brewing Your Experience...
        </h2>
        <p className="text-muted-foreground">
          From Green Bean to The Cup
        </p>
        
        {/* Progress Bar */}
        <div className="w-64 h-2 bg-coffee-200 rounded-full mt-6 mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-coffee-700 to-coffee-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
