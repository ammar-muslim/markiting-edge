import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
  }

  try {
    // بيانات وهمية مؤقتة
    const dummyArticles = [
      {
        id: 1,
        title: 'Marketing Tips for Beginners',
        body: 'Learn how to kickstart your marketing career with these essential tips...',
        createdAt: new Date(),
      },
      {
        id: 2,
        title: 'SEO Strategies for 2024',
        body: 'This article explores top SEO strategies that will dominate in 2024...',
        createdAt: new Date(),
      },
    ];

    // فلترة بناءً على الـ query
    const filteredArticles = dummyArticles.filter(article =>
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.body.toLowerCase().includes(query.toLowerCase())
    );

    return NextResponse.json(filteredArticles);
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json(
      { error: 'Failed to search articles' },
      { status: 500 }
    );
  }
}
