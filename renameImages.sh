#!/bin/bash

if [ $# -ne 1 ]; then
	echo "Call with an index to start from"
	exit 1
fi

START=$1

cd images

for f in *.jpg
do
	if [ ${#f} -gt 8 ]; then
		mv $f $START.jpg
		((START++))
	fi
done
