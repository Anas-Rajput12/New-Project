import { QdrantClient } from '@qdrant/js-client-rest';
import OpenAI from 'openai';
import * as fs from 'fs';
import * as path from 'path';
import { config } from 'dotenv';
import { projects, socials, experience, achievements } from '../lib/data';

// Load environment variables
config();

const QDRANT_URL = process.env.QDRANT_URL || '';
const QDRANT_API_KEY = process.env.QDRANT_API_KEY || '';
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || '';

if (!QDRANT_URL || !QDRANT_API_KEY || !OPENROUTER_API_KEY) {
  console.error('Missing required environment variables:');
  if (!QDRANT_URL) console.error('- QDRANT_URL');
  if (!QDRANT_API_KEY) console.error('- QDRANT_API_KEY');
  if (!OPENROUTER_API_KEY) console.error('- OPENROUTER_API_KEY');
  process.exit(1);
}

const COLLECTION_NAME = 'coforge_website';
const EMBEDDING_MODEL = 'openai/text-embedding-3-small';
const VECTOR_SIZE = 1536;

interface DocumentChunk {
  id: string;
  text: string;
  metadata: {
    source: string;
    type: string;
    title?: string;
    url?: string;
  };
}

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: OPENROUTER_API_KEY,
});

const qdrantClient = new QdrantClient({
  url: QDRANT_URL,
  apiKey: QDRANT_API_KEY,
});

async function generateEmbedding(text: string): Promise<number[]> {
  try {
    const response = await openai.embeddings.create({
      model: EMBEDDING_MODEL,
      input: text,
    });
    return response.data[0].embedding;
  } catch (error) {
    console.error('Error generating embedding:', error);
    throw error;
  }
}

function extractWebsiteContent(): DocumentChunk[] {
  const documents: DocumentChunk[] = [];
  let idCounter = 0;

  // Company Information
  documents.push({
    id: `doc_${idCounter++}`,
    text: `CoForge DevX is an AI-powered digital studio specializing in building modern web applications, AI solutions, and enterprise software.
    We transform ideas into digital innovation using cutting-edge technologies like Next.js, React, Python, AI automation, and cloud technologies.
    Contact: Email - coforgedevx@gmail.com, Phone - +92 316 4583774, Location - Nawabshah, Sindh, Pakistan.
    LinkedIn: https://www.linkedin.com/company/coforge-devx/
    GitHub: https://github.com/Anas-Rajput12`,
    metadata: {
      source: 'company_info',
      type: 'about',
      title: 'Company Information',
      url: '/about',
    },
  });

  // Services
  const services = [
    {
      title: 'Web Development',
      description: 'Modern, responsive and scalable web applications built with Next.js, React, TypeScript, and Tailwind CSS. Full-stack development with Node.js, Express.js, and FastAPI.',
    },
    {
      title: 'AI Solutions',
      description: 'AI-powered applications including chatbots, voice assistants, RAG systems, NLP solutions, and prompt engineering using Google AI Studio APIs and OpenAI.',
    },
    {
      title: 'Database Solutions',
      description: 'Database design and architecture using PostgreSQL, MySQL, Neon DB, FAISS, ChromaDB, and Pinecone for vector databases.',
    },
    {
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications using React Native and modern mobile technologies.',
    },
    {
      title: 'DevOps & Deployment',
      description: 'Docker, Kubernetes, Vercel, Netlify, Firebase Hosting, GitHub Pages, and CI/CD pipeline setup.',
    },
  ];

  services.forEach((service) => {
    documents.push({
      id: `doc_${idCounter++}`,
      text: `Service: ${service.title}. ${service.description}`,
      metadata: {
        source: 'services',
        type: 'service',
        title: service.title,
        url: '/features',
      },
    });
  });

  // Projects
  projects.forEach((project) => {
    const projectText = `Project: ${project.title}. ${project.description}
    Technologies: ${project.tech.join(', ')}.
    Category: ${project.category}.
    ${project.stats ? `Duration: ${project.stats.duration}, Type: ${project.stats.type}, Impact: ${project.stats.impact}` : ''}
    ${project.link ? `Demo: ${project.link}` : ''}
    ${project.github ? `GitHub: ${project.github}` : ''}`;

    documents.push({
      id: `doc_${idCounter++}`,
      text: projectText,
      metadata: {
        source: 'projects',
        type: 'project',
        title: project.title,
        url: '/projects',
      },
    });
  });

  // Experience
  experience.forEach((exp) => {
    const expText = `Experience: ${exp.role} at ${exp.company} (${exp.duration}).
    Details: ${exp.details.join('. ')}`;

    documents.push({
      id: `doc_${idCounter++}`,
      text: expText,
      metadata: {
        source: 'experience',
        type: 'experience',
        title: exp.role,
        url: '/about',
      },
    });
  });

  // Achievements
  achievements.forEach((achievement) => {
    documents.push({
      id: `doc_${idCounter++}`,
      text: `Achievement: ${achievement.title}. ${achievement.description}. Year: ${achievement.year}`,
      metadata: {
        source: 'achievements',
        type: 'achievement',
        title: achievement.title,
        url: '/projects',
      },
    });
  });

  // Technologies & Skills
  const techStack = `Technologies and Skills:
  Frontend: HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, TypeScript, Tailwind CSS, Responsive Design
  Backend: Node.js, Express.js, FastAPI, Python, Firebase
  Databases: PostgreSQL, MySQL, Neon DB, FAISS, ChromaDB, Pinecone
  AI & Automation: Google AI Studio APIs, NLP Chatbots, Voice Assistants, RAG Systems, Prompt Engineering
  DevOps: Docker, Kubernetes (Basic), Vercel, Netlify, Firebase Hosting, GitHub Pages, CI/CD
  Tools: Git & GitHub, VS Code, Cursor AI, Builder.io, Figma`;

  documents.push({
    id: `doc_${idCounter++}`,
    text: techStack,
    metadata: {
      source: 'technologies',
      type: 'skills',
      title: 'Technologies & Skills',
      url: '/about',
    },
  });

  // Process & Methodology
  const process = `Our Development Process:
  1. Discovery: Understanding business goals, challenges and project requirements
  2. Planning: Designing strategy, architecture and user experience flow
  3. Development: Building modern, scalable and AI-powered digital solutions
  4. Launch: Testing, optimization and deployment of the final product

  We follow Agile methodology with regular updates and transparent communication.`;

  documents.push({
    id: `doc_${idCounter++}`,
    text: process,
    metadata: {
      source: 'process',
      type: 'methodology',
      title: 'Development Process',
      url: '/about',
    },
  });

  // Values
  const values = `Core Values:
  - Innovation First: Creating future-ready digital products using modern technologies and AI
  - Client Focus: Understanding business goals and delivering meaningful digital solutions
  - Quality Engineering: Clean code, scalable architecture and high-performance applications
  - Trust & Transparency: Building long-term relationships through honesty and consistency`;

  documents.push({
    id: `doc_${idCounter++}`,
    text: values,
    metadata: {
      source: 'values',
      type: 'company_culture',
      title: 'Core Values',
      url: '/about',
    },
  });

  // Pricing Information
  const pricing = `Pricing & Engagement Models:
  We offer flexible pricing based on project scope and requirements.
  - Hourly consulting for small tasks and technical guidance
  - Fixed-price projects for well-defined scopes starting from $5,000
  - Dedicated team for long-term projects with custom pricing
  - Monthly retainer packages for ongoing support and maintenance

  Contact us for a free consultation and custom quote tailored to your needs.`;

  documents.push({
    id: `doc_${idCounter++}`,
    text: pricing,
    metadata: {
      source: 'pricing',
      type: 'pricing',
      title: 'Pricing Information',
      url: '/contact',
    },
  });

  return documents;
}

async function createCollection() {
  try {
    const collections = await qdrantClient.getCollections();
    const exists = collections.collections.some((c) => c.name === COLLECTION_NAME);

    if (exists) {
      console.log(`Collection "${COLLECTION_NAME}" already exists. Deleting...`);
      await qdrantClient.deleteCollection(COLLECTION_NAME);
    }

    console.log(`Creating collection "${COLLECTION_NAME}"...`);
    await qdrantClient.createCollection(COLLECTION_NAME, {
      vectors: {
        size: VECTOR_SIZE,
        distance: 'Cosine',
      },
    });
    console.log('Collection created successfully!');
  } catch (error) {
    console.error('Error creating collection:', error);
    throw error;
  }
}

async function ingestDocuments() {
  try {
    console.log('Starting data ingestion...\n');

    await createCollection();

    const documents = extractWebsiteContent();
    console.log(`Extracted ${documents.length} documents\n`);

    const points = [];

    for (let i = 0; i < documents.length; i++) {
      const doc = documents[i];
      console.log(`Processing document ${i + 1}/${documents.length}: ${doc.metadata.title}`);

      const embedding = await generateEmbedding(doc.text);

      points.push({
        id: i + 1,
        vector: embedding,
        payload: {
          text: doc.text,
          source: doc.metadata.source,
          type: doc.metadata.type,
          title: doc.metadata.title,
          url: doc.metadata.url,
        },
      });

      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    console.log('\nUploading to Qdrant...');
    await qdrantClient.upsert(COLLECTION_NAME, {
      wait: true,
      points: points,
    });

    console.log(`\n✅ Successfully ingested ${documents.length} documents into Qdrant!`);
    console.log(`Collection: ${COLLECTION_NAME}`);
    console.log(`Vector size: ${VECTOR_SIZE}`);
  } catch (error) {
    console.error('Error during ingestion:', error);
    throw error;
  }
}

ingestDocuments()
  .then(() => {
    console.log('\n🎉 Ingestion completed successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ Ingestion failed:', error);
    process.exit(1);
  });
