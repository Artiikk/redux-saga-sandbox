import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../redux/actions'
import Loader from './Loader'
import Post from './Post'

const FetchedPosts = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts.fetchedPosts)
  const loading = useSelector(state => state.app.loading)

  if (loading) return <Loader />

  if (!posts.length) return <button onClick={() => dispatch(fetchPosts())} className="btn btn-primary">Load more</button>

  return posts.map(post => <Post post={post} key={post.id} />)
}

export default FetchedPosts
