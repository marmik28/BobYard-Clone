export default function Footer() {
  return (
    <footer className="py-16 border-t border-border" data-testid="footer">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6" data-testid="footer-logo">
              <img 
                src="https://bobyard-public-images.s3.us-west-2.amazonaws.com/landing4-logo.png" 
                alt="Bobyard Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-muted-foreground max-w-md mb-6" data-testid="footer-description">
              AI-powered takeoff and estimating platform for landscaping professionals. 
              Get faster, more accurate estimates with intelligent automation.
            </p>
            <div className="flex space-x-6" data-testid="footer-social">
              <a href="https://twitter.com/bobyard" className="text-muted-foreground hover:text-primary transition-colors" data-testid="social-twitter">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/bobyard" className="text-muted-foreground hover:text-primary transition-colors" data-testid="social-linkedin">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div data-testid="footer-product">
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="https://www.bobyard.com/sample" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-sample">Sample</a></li>
              <li><a href="https://www.bobyard.com/demo" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-demo">Demo</a></li>
              <li><a href="https://app.bobyard.com/login" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-login">Login</a></li>
              <li><a href="https://app.bobyard.com/register" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-signup">Sign up</a></li>
            </ul>
          </div>

          {/* Company */}
          <div data-testid="footer-company">
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="https://www.bobyard.com/careers" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-careers">Careers</a></li>
              <li><a href="https://www.bobyard.com/news" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-news">News</a></li>
              <li><a href="mailto:support@bobyard.com" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-contact-email">Contact</a></li>
              <li><a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-privacy">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm" data-testid="footer-copyright">
              © 2024 Bobyard Inc. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm mt-4 md:mt-0" data-testid="footer-location">
              Made in Cupertino, California
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
