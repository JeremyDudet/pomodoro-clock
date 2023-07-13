"use client";

import React, { useEffect, useState } from "react";

export default function Home() {
  const upArrow = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
        />
      </svg>
    );
  };

  // Initial timer states
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [timer, setTimer] = useState(sessionLength * 60);
  const [isActive, setIsActive] = useState(false);
  const [isSession, setIsSession] = useState(true);

  // Function to start the timer
  const handleStart = () => {
    setIsActive(true);
  };

  // Function to pause the timer
  const handlePause = () => {
    setIsActive(false);
  };

  // Function to reset the timer
  const handleReset = () => {
    setIsActive(false);
    setIsSession(true);
    setSessionLength(25);
    setBreakLength(5);
    setTimer(25 * 60);
  };

  // Function to increase session length
  const increaseSession = () => {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1);
      if (!isActive) {
        setTimer((sessionLength + 1) * 60);
      }
    }
  };

  // Function to decrease session length
  const decreaseSession = () => {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1);
      if (!isActive) {
        setTimer((sessionLength - 1) * 60);
      }
    }
  };

  // Function to increase break length
  const increaseBreak = () => {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
  };

  // Function to decrease break length
  const decreaseBreak = () => {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
  };

  // useEffect to handle the timer functionality
  useEffect(() => {
    let interval = null;

    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    } else if (isActive && timer === 0) {
      setIsSession(!isSession);
      setTimer(isSession ? breakLength * 60 : sessionLength * 60);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, timer, isSession, sessionLength, breakLength]);

  return (
    <main className="flex min-h-screen flex-col items-center m-auto p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          25 + 5 Clock
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-center justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By <span>Jeremy Dudet</span>
          </a>
        </div>
      </div>
      <div
        id="drum-panel"
        className="bg-slate-950 overflow-hidden rounded-lg min-w-fit max-w-xl flex flex-col w-full h-600px my-auto px-8 py-4"
      >
        <div
          id="inner-container"
          className="flex w-full flex-col justify-center items-center gap-8"
        >
          <div className="flex gap-8 items-center justify-center">
            <div
              id="settings"
              className="flex flex-col items-center justify-center"
            >
              <div>Break Length</div>
              <div className="flex gap-2">
                <span onClick={decreaseBreak}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    />
                  </svg>
                </span>
                <span>{breakLength}</span>
                <span onClick={increaseBreak}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div>Session Length</div>
              <div className="flex gap-2">
                <span onClick={decreaseSession}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    />
                  </svg>
                </span>
                <span>{sessionLength}</span>
                <span onClick={increaseSession}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h1>Session</h1>
            <h3>{`${Math.floor(timer / 60)}:${timer % 60 < 10 ? "0" : ""}${
              timer % 60
            }`}</h3>
          </div>
          <div id="controls" className="flex justify-between gap-4">
            <button
              onClick={handleStart}
              className="rounded-full bg-slate-700 text-center min-w-fit px-2"
            >
              Start
            </button>
            <button
              onClick={handlePause}
              className="rounded-full bg-slate-700 text-center min-w-fit px-2"
            >
              Stop
            </button>
            <button
              onClick={handleReset}
              className="rounded-full bg-slate-700 text-center min-w-fit px-2"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
