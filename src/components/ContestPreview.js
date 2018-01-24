import React from 'react';

const ContestPreview = (contest) => (
	<div className="ContestPreview">
		<div>
		{contest.categoryName}
		</div> 
		<div>
		{contest.contestName}
	</div> 
)

default export ContestPreview;