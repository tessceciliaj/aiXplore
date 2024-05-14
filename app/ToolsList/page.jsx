import Link from 'next/link';
import Header from '../components/Header';


const categories = {
  Creative: [
    { name: 'Playground AI', url: 'https://playground.com/', description: 'Create and edit photos like a pro.' },
    { name: 'Luma Labs', url: 'https://lumalabs.ai/', description: 'Genie (text to 3D) via discord / web / app.' },
    { name: 'Google Earth Studio', url: 'https://www.google.com/earth/studio/', description: 'Create 3D content with Google Earth imagery.' },
    { name: 'Leia Pix', url: 'https://www.leiapix.com/', description: 'Turn 2D images into captivating 3D animations.' },
    { name: 'Insta 3D', url: 'https://www.insta3d.top/', description: 'Create depth maps for 3D effects.' },
    { name: 'Sketch', url: 'https://sketch.metademolab.com/', description: 'Make 2D animations come alive.' },
    { name: 'Ideogram', url: 'https://ideogram.ai/login', description: 'Generate pictures with text prompts.' },
    { name: 'DALLE 3', url: 'https://www.bing.com/images/create', description: 'Create high-quality images.' },
    { name: 'Illusion', url: 'https://huggingface.co/spaces/AP123/IllusionDiffusion', description: 'Generate stunning high-quality illusion artwork.' },
  ],
  Video: [
    { name: 'Pika Labs', url: 'https://discord.com/invite/pika', description: 'Join the discord community for creative tools.' },
    { name: 'CapCut', url: 'https://www.capcut.com/sv-se/', description: 'Video editing and upscaling.' },
    { name: 'Replicate', url: 'https://replicate.com/', description: 'Image upscaling and enhancements.' },
    { name: 'UpScayl', url: 'https://www.upscayl.org/', description: 'Supercharge your images with AI.' },
    { name: 'Synthesia', url: 'https://www.synthesia.io/', description: 'Create videos using AI.' },
  ],
  Sound: [
    { name: 'Suno', url: 'https://www.suno.ai/', description: 'Write songs with AI.' },
    { name: 'Waveformer', url: 'https://waveformer.replicate.dev/', description: 'Generate stunning high-quality instrumental music with WF.' },
    { name: 'TextFX', url: 'https://textfx.withgoogle.com/', description: 'AI-powered lyric writing.' },
  ],
  Productivity: [
    { name: 'Perplexity', url: 'https://www.perplexity.ai', description: 'AI assistant for varied tasks.' },
    { name: 'SciSpace', url: 'https://typeset.io/', description: 'AI chat for scientific PDFs.' },
    { name: 'Jasper', url: 'https://www.jasper.ai/', description: 'Automated copywriting tool.' },
    { name: 'Beautiful AI', url: 'https://www.beautiful.ai/', description: 'AI-powered presentation creator.' },
  ],
};

const ToolsList = () => {
  return (
    <div className='section text-white'>
        <Header btnText="Ai Tools List"/>
        <h1 className='h1 pt-16'>Ai Tols list </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-8">
      {Object.entries(categories).map(([category, tools]) => (
        <div key={category} className='p-8'>
          <h2 className="text-xl font-bold">{category}</h2>
          <ul className="list-disc list-inside">
            {tools.map((tool) => (
              <li key={tool.name} className="mt-2">
                <Link href={tool.url} passHref>
                  <p className="text-blue-500 hover:underline">{tool.name}</p>
                </Link>
                - {tool.description}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ToolsList;
