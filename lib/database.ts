// Database schema for production use with Prisma

/*
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Patient {
  id        String   @id @default(cuid())
  name      String
  email     String?  @unique
  phone     String?
  dob       DateTime?
  address   String?
  orders    Order[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Drug {
  id          String @id @default(cuid())
  name        String
  genericName String?
  dosage      String
  form        String // tablet, capsule, liquid, etc.
  orders      Order[]
}

model Order {
  id               String   @id @default(cuid())
  patientId        String
  drugId           String
  prescriptionText String
  quantity         Int
  dosage           String
  instructions     String
  status           OrderStatus @default(PENDING)
  prescribedBy     String
  createdAt        DateTime @default(now())
  updatedAt        DateTime @updatedAt
  
  patient Patient @relation(fields: [patientId], references: [id])
  drug    Drug    @relation(fields: [drugId], references: [id])
}

model Prescription {
  id           String   @id @default(cuid())
  imageUrl     String
  extractedText String
  confidence   Float
  processed    Boolean  @default(false)
  orderId      String?
  createdAt    DateTime @default(now())
}

enum OrderStatus {
  PENDING
  PROCESSING
  READY
  DISPENSED
  CANCELLED
}
*/

export const mockDatabase = {
  patients: [
    { id: "1", name: "John Doe", email: "john@example.com" },
    { id: "2", name: "Jane Smith", email: "jane@example.com" },
  ],
  drugs: [
    { id: "1", name: "Amoxicillin", dosage: "500mg", form: "capsule" },
    { id: "2", name: "Lisinopril", dosage: "10mg", form: "tablet" },
  ],
  orders: [],
};
