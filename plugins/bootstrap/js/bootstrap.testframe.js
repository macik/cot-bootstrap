var frame_id = 'bs_test';
// fix to view full height of framed window
function frameSizeUpdate(){
	document.getElementById(frame_id).height = document.getElementById(frame_id).contentWindow.document.body.scrollHeight+50+'px';
}

timeout = setInterval("frameSizeUpdate()",500);