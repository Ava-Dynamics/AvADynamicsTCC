import React, { useEffect, useState, useRef, useCallback } from "react";
import ReactPlayer from "react-player/youtube";
import { coursesService } from "../../services/api/courses";
import { userService } from "../../services/api/users";

const CourseVideo = ({ course }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [totalProgress, setTotalProgress] = useState(0);
  const [progress, setProgress] = useState(0);
  const playerRef = useRef(null);

  useEffect(() => {
    const getProgress = async () => {
      const res = await coursesService.getProgress(course.id);
      if (res && res.status === 200) {
        setTotalProgress(res.data);
      }
    }

    getProgress();
  }, [course.id]);

  const receiveNewMedal = useCallback(async () => {
    const medalName = "Estudioso";
    let res = await userService.getMedals();
    if (res && res.status === 200) {
      if (!res.data.some(medal => medal.name === medalName)) {
        res = await userService.receiveMedal(medalName);
        if (res && res.status === 201) {
          alert(`Nova medalha recebida: ${medalName}`);
        }
      }
    }
  }, []);

  const saveProgress = useCallback(async () => {
    const newProgress = totalProgress + (progress / course.videos.length);
    if (newProgress > totalProgress) {
      await coursesService.saveProgress(course.id, newProgress);
      setTotalProgress(prev => Math.max(prev, newProgress));
    }
    if (newProgress >= 100) {
      await receiveNewMedal();
    }
  }, [totalProgress, progress, course, receiveNewMedal]);

  const handleNext = () => {
    if (currentVideoIndex < course.videos.length - 1) {
      if (progress >= 95) {
        saveProgress(); // Atualiza o progresso caso o vídeo seja completado
      }
      setCurrentVideoIndex(currentVideoIndex + 1);
      setProgress(0); // Resetar o progresso ao mudar de vídeo
    }
  };

  const handlePrev = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
      setProgress(0); // Resetar o progresso ao mudar de vídeo
    }
  };

  const handleProgress = (state) => {
    setProgress(state.played * 100); // Atualiza o progresso em porcentagem
  };

  return (
    <div>
      <h1 className="text-black text-2xl text-center mb-10">{course.title}</h1>
      <div className="flex items-center space-x-4 mb-5">
        <button className={`px-4 py-0.5 border bg-white ${currentVideoIndex === 0 ? "text-gray-500 border-gray-500" : "text-black border-black"}`} onClick={handlePrev} disabled={currentVideoIndex === 0}>
          Voltar
        </button>

        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-purple-700 h-2.5 rounded-full"
            style={{ width: `${Math.round(progress)}%` }}
          ></div>
        </div>

        <button className={`px-4 py-0.5 border bg-white ${currentVideoIndex >= course.videos.length - 1 ? "text-gray-500 border-gray-500" : "text-black border-black"}`} onClick={handleNext} disabled={currentVideoIndex === course.videos.length - 1}>
          Avançar
        </button>
      </div>
      
      <div className="bg-black w-full flex items-center justify-center">
        <ReactPlayer
          ref={playerRef}
          url={course.videos[currentVideoIndex].link}
          playing
          controls
          onProgress={handleProgress} // Atualiza o progresso durante a reprodução
          width="60%"
          height="400px"
        />
      </div>
    </div>
  );
};

export default CourseVideo;