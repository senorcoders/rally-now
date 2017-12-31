#!/bin/sh
# build-for-android-store.sh: -*- Shell-script -*-  DESCRIPTIVE TEXT.
# 
#  Copyright (c) 2017 Brian J. Fox & Orchid Labs, Inc.
#  Author: Brian J. Fox (bfox@meshlabs.org)
#  Author: A truckload of others
#  Birthdate: Sun Dec 31 10:26:07 2017.
export signing_pass="idtmp2tv"
name="Let's Rally"
org_unit="Research & Development"
org="Let's Rally, LLC"
city="Boston"
state="Massachussets"
country="US"


if [ ! -e "letsrally.app.keystore" ]; then
    keytool -genkey -v -keystore letsrally.app.keystore -alias letsrally -keyalg RSA -keysize 2048 -validity 10000 >/dev/null <<EOF
$signing_pass
$signing_pass
$name
$org_unit
$org
$city
$state
$country
yes
EOF
    if [ ! -e "letsrally.app.keystore" ]; then
	echo "But I failed!  You'll have to figure this out manually :-("
	exit 1
    else
	echo "Got it - continuing build."
    fi
fi

ionic cordova build android --release
cp ./platforms/android/build/outputs/apk/android-release-unsigned.apk ./letsrally_app-release-unsigned.apk

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ./letsrally_app.keystore -storepass:env signing_pass letsrally_app-release-unsigned.apk letsrally

zipalign -f 4 letsrally_app-release-unsigned.apk letsrally.apk

rm letsrally_app-release-unsigned.apk

echo "Your new store-ready apk is named 'letsrally.apk'"
