import React from 'react';

const Link = (props) => {
  let { link } = props;

  return (
    <a href={link} target='_blank' rel='noopener noreferrer'>
      <svg
        version='1.1'
        id='Capa_1'
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        viewBox='0 0 477.389 477.389'
        height='20'
      >
        <g>
          <g>
            <path
              d='M451.209,68.647c-16.787-16.799-39.564-26.234-63.312-26.226v0c-23.739-0.056-46.516,9.376-63.266,26.197L209.056,184.194
			c-22.867,22.903-31.609,56.356-22.869,87.518c2.559,9.072,11.988,14.352,21.06,11.793c9.072-2.559,14.352-11.988,11.793-21.06
			c-5.388-19.271,0.018-39.95,14.148-54.118L348.763,92.768c21.608-21.613,56.646-21.617,78.259-0.008
			c21.613,21.608,21.617,56.646,0.009,78.259L311.456,286.594c-7.574,7.584-17.193,12.797-27.682,15.002
			c-9.228,1.921-15.151,10.959-13.23,20.187c1.652,7.935,8.657,13.613,16.762,13.588c1.193,0.001,2.383-0.125,3.55-0.375
			c16.951-3.575,32.494-12.007,44.732-24.269l115.576-115.558C486.114,160.243,486.134,103.598,451.209,68.647z'
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d='M290.702,206.142c-2.559-9.072-11.988-14.352-21.06-11.793s-14.352,11.988-11.793,21.06
			c5.388,19.271-0.018,39.95-14.148,54.118L128.125,385.103c-21.608,21.613-56.646,21.617-78.259,0.008
			c-21.613-21.608-21.617-56.646-0.009-78.259l115.576-115.593c7.562-7.582,17.17-12.795,27.648-15.002
			c9.243-1.849,15.237-10.84,13.388-20.082s-10.84-15.237-20.082-13.388c-0.113,0.023-0.225,0.046-0.337,0.071
			c-16.954,3.579-32.502,12.011-44.749,24.269L25.725,282.703c-34.676,35.211-34.242,91.865,0.969,126.541
			c34.827,34.297,90.731,34.301,125.563,0.008l115.575-115.593C290.7,270.756,299.442,237.303,290.702,206.142z'
            />
          </g>
        </g>
      </svg>
    </a>
  );
};

export default Link;