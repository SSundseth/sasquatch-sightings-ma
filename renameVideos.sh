#!/bin/bash

if [ $# -ne 1 ]; then
	echo "Call with an index to start from"
	exit 1
fi

START=$1

cd videos

for f in *.mp4
do
	if [ ${#f} -gt 8 ]; then
		mv $f $START.mp4
		((START++))
	fi
done
