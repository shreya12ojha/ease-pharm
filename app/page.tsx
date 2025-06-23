import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, FileText, Users, Package } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Pharmacist's AI Assistant
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Automatically process handwritten prescriptions and match them
            against patient orders using AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader className="text-center">
              <Upload className="h-12 w-12 text-blue-600 mx-auto mb-2" />
              <CardTitle>Upload</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Upload prescription images
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <FileText className="h-12 w-12 text-green-600 mx-auto mb-2" />
              <CardTitle>Extract</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                AI extracts text from handwriting
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-2" />
              <CardTitle>Match</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Match against patient records
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Package className="h-12 w-12 text-orange-600 mx-auto mb-2" />
              <CardTitle>Generate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Auto-create pharmacy orders
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center space-x-4">
          <Button asChild size="lg">
            <Link href="/upload">Upload Prescription</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/dashboard">View Dashboard</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
