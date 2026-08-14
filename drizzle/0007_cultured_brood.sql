CREATE INDEX "title_search_index" ON "forums" USING gin (to_tsvector('english',
    "forum_name"));