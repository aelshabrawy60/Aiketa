import { FaFacebook } from "react-icons/fa";
import { BsFilePost } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";


export const templates_ = [
    {
      name: 'Facebook Ad',
      description: 'Create a viral Facebook ad that drives engagement',
      questions: [
        'What product or service are you promoting?',
        'Who is your ideal customer?',
        'What action should people take after seeing the ad?'
      ],
      prompt: 'You are an expert Facebook ad copywriter with extensive experience in crafting high-converting ads. Write a compelling, attention-grabbing ad that effectively highlights unique features and includes a strong, persuasive call-to-action that drives immediate results.',
      color: '#4267B2', // Facebook Blue
      icon: <FaFacebook />
    },
    {
      name: 'Blog Post',
      description: 'Write an engaging blog post',
      questions: [
        'What is the main topic of the blog post?',
        'Who is the target audience?',
        'What key points should be covered?'
      ],
      prompt: 'You are a seasoned blog writer specializing in creating long-form, informative, and engaging content. Write a well-structured, SEO-optimized blog post that addresses key points, engages the audience, and offers valuable insights.',
      color: '#FF6347', // Tomato
      icon: <BsFilePost />
    },
    {
      name: 'Email Newsletter',
      description: 'Craft a compelling email newsletter',
      questions: [
        'What is the purpose of the email?',
        'Who is the target audience?',
        'What action should the reader take after reading?'
      ],
      prompt: 'You are a skilled email marketer with expertise in crafting high-conversion email newsletters. Write a captivating, persuasive email that engages the reader, highlights the benefits, and includes a clear call-to-action that encourages immediate action.',
      color: '#00A8E8', // Electric Blue
      icon: <HiOutlineMail />
    },
    {
      name: 'Instagram Caption',
      description: 'Create an attention-grabbing Instagram caption',
      questions: [
        'What is the main message or feeling to convey?',
        'Are there specific hashtags to include?',
        'What call-to-action would you like?'
      ],
      prompt: 'You are a creative social media strategist with a deep understanding of Instagram’s platform. Write a catchy, engaging Instagram caption that captures attention, promotes engagement, and includes relevant hashtags and a clear call-to-action.',
      color: '#C13584', // Instagram Pink
      icon: <FaInstagram />
    },
    {
      name: 'YouTube Video Script',
      description: 'Write an engaging YouTube video script',
      questions: [
        'What is the video topic?',
        'Who is the target audience?',
        'What key points should be covered?'
      ],
      prompt: 'You are an experienced YouTube scriptwriter who excels at creating engaging, viewer-focused scripts. Write a structured and dynamic script that keeps viewers hooked, includes clear call-to-actions, and ensures maximum viewer retention.',
      color: '#FF0000', // YouTube Red
      icon: <FaYoutube />
    },
    {
      name: 'Product Description',
      description: 'Create a compelling product description',
      questions: [
        'What is the product and its key features?',
        'Who is the ideal customer?',
        'What unique selling points should be highlighted?'
      ],
      prompt: 'You are a skilled product copywriter with a knack for writing persuasive, results-driven descriptions. Write a detailed product description that highlights key features, emphasizes the product’s unique value, and appeals directly to the ideal customer’s needs and desires.',
      color: '#FFD700', // Gold
      icon: <AiFillProduct />
    },
    {
      name: 'LinkedIn Post',
      description: 'Write an engaging LinkedIn post',
      questions: [
        'What is the main topic or announcement?',
        'Who is the target audience?',
        'What call-to-action or engagement do you want?'
      ],
      prompt: 'You are an expert LinkedIn content creator with a strong understanding of professional networking. Write a concise, engaging LinkedIn post that fosters discussion, encourages interaction, and includes a persuasive call-to-action.',
      color: '#0077B5', // LinkedIn Blue
      icon: <FaLinkedin />
    },
    {
      name: 'Twitter Thread',
      description: 'Craft a Twitter thread that captures attention',
      questions: [
        'What is the main topic of the thread?',
        'What key points should each tweet cover?',
        'What final takeaway or call-to-action should be included?'
      ],
      prompt: 'You are a Twitter expert with a talent for creating concise, impactful threads. Write a series of tweets on the given topic, ensuring each tweet adds value, leads to a meaningful conclusion, and finishes with a powerful call-to-action or takeaway.',
      color: '#1DA1F2', // Twitter Blue
      icon: <FaTwitter />
    },
    {
      name: 'Press Release',
      description: 'Write a professional press release',
      questions: [
        'What is the main announcement or news?',
        'Who is the target audience?',
        'What key details or quotes should be included?'
      ],
      prompt: 'You are a professional press release writer with a strong background in creating impactful, media-worthy releases. Write a clear, concise, and professional press release that conveys the announcement effectively and includes relevant details and quotes.',
      color: '#4B0082', // Indigo
      icon: <IoNewspaperOutline />
    }
];