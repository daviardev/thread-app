import Thread from './Thread'

export default function Feed ({ user, filterThreads }) {
  return (
    <>
      {
      filterThreads &&
        filterThreads.map(filterThread => (
          <Thread
            key={filterThread.id}
            user={user}
            filterThread={filterThread}
          />
        ))
}
    </>
  )
}
