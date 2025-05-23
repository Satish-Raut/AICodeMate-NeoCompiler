import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Play, ArrowLeft, Copy, Check, ThumbsUp } from 'lucide-react';
import { getCodeSnippetByShareableLink, incrementSnippetViews, incrementSnippetLikes } from '../services/codeSnippets';
import { CodeSnippet } from '../types';
import NavBar from './NavBar';
import CodeSnippetViewer from './ui/CodeSnippetViewer';

export default function SharedSnippet() {
  const { linkId } = useParams<{ linkId: string }>();
  const navigate = useNavigate();

  const [snippet, setSnippet] = useState<CodeSnippet | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Reset image error state when snippet changes
  useEffect(() => {
    setImageError(false);
  }, [snippet?.creatorPhotoURL]);

  // Handle image load error
  const handleImageError = () => {
    setImageError(true);
  };

  // Fetch snippet data
  useEffect(() => {
    async function fetchSnippet() {
      if (!linkId) return;

      setIsLoading(true);
      setError(null);

      try {
        const snippetData = await getCodeSnippetByShareableLink(linkId);

        if (!snippetData) {
          setError("The shared snippet could not be found or has been removed.");
          return;
        }

        // Make sure snippet is public
        if (!snippetData.isPublic) {
          setError("This snippet is no longer available.");
          return;
        }

        setSnippet(snippetData);

        // Set liked state from localStorage
        const likedSnippets = JSON.parse(localStorage.getItem('likedSnippets') || '[]');
        setHasLiked(likedSnippets.includes(snippetData.id));

        // Increment view count
        await incrementSnippetViews(snippetData.id);
      } catch (err: any) {
        console.error("Error loading snippet:", err);
        setError(err.message || "Failed to load the shared snippet");
      } finally {
        setIsLoading(false);
      }
    }

    fetchSnippet();
  }, [linkId]);

  // Open in compiler
  const handleOpenInCompiler = () => {
    if (snippet) {
      // Use the actual linkId from URL params to ensure proper loading in the compiler
      if (linkId) {
        navigate(`/compiler/${linkId}`);
      } else if (snippet.shareableLink) {
        navigate(`/compiler/${snippet.shareableLink}`);
      }
    }
  };

  // Copy code to clipboard
  const handleCopyCode = async () => {
    if (!snippet?.code) return;

    try {
      await navigator.clipboard.writeText(snippet.code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  // Like snippet
  const handleLike = async () => {
    if (!snippet || hasLiked) return;

    try {
      await incrementSnippetLikes(snippet.id);

      // Store liked state in localStorage
      const likedSnippets = JSON.parse(localStorage.getItem('likedSnippets') || '[]');
      likedSnippets.push(snippet.id);
      localStorage.setItem('likedSnippets', JSON.stringify(likedSnippets));

      // Update UI
      setHasLiked(true);
      setSnippet({
        ...snippet,
        likes: (snippet.likes || 0) + 1
      });
    } catch (err) {
      console.error("Failed to like snippet:", err);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center">
        <div className="text-center">
          <svg className="animate-spin h-12 w-12 text-purple-500 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <p className="mt-4 text-gray-300">Loading shared snippet...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 p-6 flex flex-col items-center justify-center">
        <div className="bg-red-900/20 border border-red-800 rounded-lg p-6 max-w-md w-full">
          <h2 className="text-xl font-semibold text-white mb-2">Error</h2>
          <p className="text-red-400 mb-4">{error}</p>
          <Link
            to="/"
            className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-1"
          >
            <ArrowLeft className="w-4 h-4" />
            Go to homepage
          </Link>
        </div>
      </div>
    );
  }

  if (!snippet) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 p-6 flex flex-col items-center justify-center">
        <div className="bg-gray-800/80 border border-gray-700 rounded-lg p-6 max-w-md w-full">
          <h2 className="text-xl font-semibold text-white mb-2">Snippet Not Found</h2>
          <p className="text-gray-400 mb-4">This shared snippet might have been removed or is no longer available.</p>
          <Link
            to="/"
            className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-1"
          >
            <ArrowLeft className="w-4 h-4" />
            Go to homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white flex flex-col">
      <NavBar />

      <main className="flex-1 max-w-7xl mx-auto w-full p-4 sm:p-6">
        {/* Snippet header */}
        <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-1">{snippet.title}</h1>
            {snippet.description && (
              <p className="text-gray-300 text-sm md:text-base">{snippet.description}</p>
            )}

            {/* Creator information with image error handling and better fallbacks */}
            <div className="flex items-center mt-3 text-sm text-gray-400">
              <Link 
                to={`/${snippet.creatorUsername || snippet.userId}`}
                className="flex items-center hover:text-purple-300 transition-colors"
              >
                {snippet.creatorPhotoURL && !imageError ? (
                  <img
                    src={snippet.creatorPhotoURL}
                    alt={snippet.creatorName || 'User'}
                    className="w-6 h-6 rounded-full mr-2 border border-purple-500/50"
                    onError={handleImageError}
                  />
                ) : (
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center mr-2 text-xs font-medium">
                    {snippet.creatorName ? snippet.creatorName.charAt(0).toUpperCase() : 'U'}
                  </div>
                )}
                <span>Created by <span className="font-medium text-gray-300 hover:text-purple-300">{snippet.creatorName || 'Anonymous User'}</span></span>
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Run in Compiler button */}
            <button
              onClick={handleOpenInCompiler}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors font-medium"
            >
              <Play className="w-5 h-5" />
              <span>Run in Compiler</span>
            </button>

            {/* Copy button */}
            <button
              onClick={handleCopyCode}
              className="flex items-center gap-2 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 transition-colors"
            >
              {isCopied ? (
                <>
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  <span>Copy Code</span>
                </>
              )}
            </button>

            {/* Like button */}
            <button
              onClick={handleLike}
              disabled={hasLiked}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${hasLiked
                  ? 'bg-red-600/20 border-red-500/50 text-red-400'
                  : 'bg-gray-800 border-gray-700 hover:border-red-500/50 hover:text-red-400'
                } transition-all`}
            >
              <ThumbsUp className={`w-5 h-5 ${hasLiked ? 'fill-red-500 text-red-500' : ''}`} />
              <span>{snippet.likes || 0}</span>
            </button>
          </div>
        </div>

        {/* Snippet Info - Updated to match SharedSnippet's layout style */}
        <div className="mb-4 bg-gray-800/80 border border-gray-700 rounded-lg p-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <div>
            <span className="text-gray-400">Language:</span>{' '}
            <span className="font-medium">{snippet.language}</span>
          </div>
          <div>
            <span className="text-gray-400">Created:</span>{' '}
            <span>{new Date(snippet.createdAt).toLocaleDateString()}</span>
          </div>
          <div>
            <span className="text-gray-400">Updated:</span>{' '}
            <span>{new Date(snippet.updatedAt).toLocaleDateString()}</span>
          </div>
          <div>
            <span className="text-gray-400">Views:</span>{' '}
            <span>{snippet.views || 0}</span>
          </div>
          <div>
            <span className="text-gray-400">Likes:</span>{' '}
            <span>{snippet.likes || 0}</span>
          </div>
        </div>

        {/* Code Display */}
        <div className="mb-8">
          <CodeSnippetViewer
            code={snippet.code}
            language={snippet.language}
            title={snippet.title}
            showCopyButton={true}
          />
        </div>

        {/* Call to action */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 mb-4">
            Create and share your own code snippets with NeoCompiler
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/register"
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium transition-colors"
            >
              Sign up for free
            </Link>
            <Link
              to="/compiler"
              className="px-4 py-2 border border-purple-600/70 hover:bg-purple-600/20 rounded-lg text-white transition-all"
            >
              Try NeoCompiler now
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}