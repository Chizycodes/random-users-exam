import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";
import Pagination from '../components/Pagination';
import Loader from '../components/Loader'

const UsersList = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentUsers = users?.slice(firstPostIndex, lastPostIndex);

  console.log(currentUsers);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://randomuser.me/api/?results=${300}&seed=abc`)
      .then(function(response) {
        // handle success
        setUsers(response.data.results);
        console.log(response.data.results);
        setLoading(false)
      })
      .catch(function(error) {
        // handle error
        console.log(error);
        setLoading(false);
      });
  }, [])

  return (
    <div className="w-full flex flex-col items-center pt-10">
        <h1 className="text-[2rem] font-bold mb-3">Users</h1>

      {
        loading ? (
          <div className="mt-40">
            <Loader />
          </div>

        ) : (
          <div className="flex flex-wrap gap-10 justify-center w-full max-w-[1250px] px-5 py-10">
            {
              currentUsers?.map((user, idx) => {
                return (
                  <div key={idx}>
                    <UserCard user={user} />
                  </div>

                )
              })
            }
            <Pagination totalPosts={users?.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
          </div>
        )
      }
    </div>
  );
}

export default UsersList;