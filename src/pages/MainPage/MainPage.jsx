import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 100vh;
`;

const PageContainer = styled(ContainerCenter)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 8vh;
  padding-bottom: 5vh;
  gap: 20px;
  position: relative;
  background-color: white;
`;

export default function BaekjoonProfile() {
  const [userId, setUserId] = useState('');
  const [profile, setProfile] = useState(null);
  const [solved, setSolved] = useState([]);
  const [levelCounts, setLevelCounts] = useState([]);

  const fetchProfile = async () => {
    try {
      const profileResponse = await axios.get(`https://solved.ac/api/v3/user/show?handle=${userId}`);
      setProfile(profileResponse.data);

      const solvedResponse = await axios.get(`https://solved.ac/api/v3/search/problem?query=solved_by%3A${userId}&sort=level&direction=desc`);
      setSolved(solvedResponse.data.items);

      const levelCountsResponse = await axios.get(`https://solved.ac/api/v3/user/problem_stats?handle=${userId}`);
      setLevelCounts(levelCountsResponse.data.filter(item => item.solved !== 0));
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  return (
    <ContainerCenter>
      <PageContainer>
        <h1>사용자 프로필 불러오기</h1>
        <input
          type="text"
          value={userId}
          onChange={e => setUserId(e.target.value)}
          placeholder="Enter user ID"
        />
        <button onClick={fetchProfile}>보기</button>

        {profile && (
          <div>
            <h2>========{userId}님의 프로필========</h2>
            <p>Rank: {profile.rank}</p>
            <p>Tier: {profile.tier}</p>
            <p>Solved Count: {profile.solvedCount}</p>
            <p>Rating: {profile.rating}</p>
            <p>Exp: {profile.exp}</p>
          </div>
        )}

        {solved.length > 0 && (
          <div>
            <h2>========{userId}님이 푼 문제들({solved.length})========</h2>
            <ul>
              {solved.map(problem => (
                <li key={problem.problemId}>{problem.titleKo} (Level: {problem.level})</li>
              ))}
            </ul>
          </div>
        )}

        {levelCounts.length > 0 && (
          <div>
            <h2>========{userId}님이 푼 문제들의 레벨별 갯수========</h2>
            <ul>
              {levelCounts.map(item => (
                <li key={item.level}>Level {item.level} - Total: {item.total}, Solved: {item.solved}</li>
              ))}
            </ul>
          </div>
        )}
      </PageContainer>
    </ContainerCenter>
  );
}
