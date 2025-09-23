import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, FileImage, CheckCircle } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function Sample() {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedFile) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6" data-testid="sample-title">
              Sample run
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed" data-testid="sample-description">
              Upload a drawing here and our team will get back to you with a walkthrough of Bobyard AI models doing the work for you.
            </p>
          </div>

          {!isSubmitted ? (
            /* Upload Form */
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit}>
                  <div
                    className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-200 ${
                      dragActive
                        ? "border-green-500 bg-green-50"
                        : selectedFile
                        ? "border-green-500 bg-green-50"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    data-testid="upload-area"
                  >
                    {selectedFile ? (
                      <div className="space-y-4">
                        <FileImage className="h-12 w-12 text-green-600 mx-auto" />
                        <div>
                          <p className="text-green-700 font-medium" data-testid="selected-file-name">
                            {selectedFile.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setSelectedFile(null)}
                          className="text-sm text-gray-500 hover:text-gray-700"
                          data-testid="remove-file"
                        >
                          Remove file
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <Upload className="h-12 w-12 text-gray-400 mx-auto" />
                        <div>
                          <p className="text-lg font-medium text-gray-900" data-testid="upload-instructions">
                            Drag & drop, or click to select
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            Supported formats: PDF, PNG, JPG (max 10MB)
                          </p>
                        </div>
                      </div>
                    )}
                    
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf,.png,.jpg,.jpeg"
                      onChange={handleFileSelect}
                      id="file-upload"
                      data-testid="file-input"
                    />
                    {!selectedFile && (
                      <label
                        htmlFor="file-upload"
                        className="absolute inset-0 cursor-pointer"
                        data-testid="file-upload-label"
                      />
                    )}
                  </div>

                  <div className="mt-8 text-center">
                    <Button
                      type="submit"
                      disabled={!selectedFile}
                      className="btn-primary px-8 py-3 text-lg font-semibold"
                      data-testid="request-sample-button"
                    >
                      Request sample
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          ) : (
            /* Success Message */
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4" data-testid="success-title">
                  Request Submitted!
                </h2>
                <p className="text-lg text-gray-600 mb-6" data-testid="success-message">
                  Thank you for uploading your drawing. Our team will analyze it with Bobyard AI and get back to you within 24 hours with a detailed walkthrough.
                </p>
                <div className="space-y-3 text-sm text-gray-500">
                  <p>• We'll show you how our AI identifies and counts materials</p>
                  <p>• You'll see the time savings compared to manual takeoffs</p>
                  <p>• We'll provide a personalized demo of our platform</p>
                </div>
                <Button
                  onClick={() => {
                    setIsSubmitted(false);
                    setSelectedFile(null);
                  }}
                  variant="outline"
                  className="mt-6"
                  data-testid="submit-another-button"
                >
                  Submit another drawing
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}