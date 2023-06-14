import { defineConfig } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    EnvironmentPlugin({
      SPREADSHEET_ID: "10M6EzI2eFZSUF9AfY7hSnRwGisKog9Chdj5oVGgq3Wk",
      SHEET_ID: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCSs9D5F1yNPioL\n/01MvMNQTK8xvr6QKesRTyyc6hlxcTCQxZYNogb+/Z/ZO75O/dOVmgREldUFux+l\nK2H15QbPUwgtG/aMlLw4w6owopM9tBXhHUzFV0nMvm4AlpKCb0n0UkwS/qUehXWC\nfZm+2VOGKKSGlJHIkWJHciFjUbPwNtKK1C5+k4uvq+dQuMqtGeSW6WOLjJR6ibB0\nGqN/9BWan4N6TOkNH7XuqTGTlrAKUpLqXW6Cx/aefKHsMwmO8Lo6uBpJ5KaInzG0\nXBvVMrlNfVpzrpEd2dKc4Dc3PSJ7APmn5lbo9B34XrzmEvNQTREcoHMYW6MUQVtf\ncyJACHIjAgMBAAECggEAAaoPk1vb/XA4muU9E8NKdfVAwZA36jvHgm1DBM61Fi/i\nDKppLuNpL+hhsV23pX7EsTxLkxmeDpAWZlHNLTR5dM2s2JIqJGMllYFGw4F8qSUL\nYH/sGIsKd8urRM9wfxFTJfXvDgIcjnGWKTJSlbMyeuGoKCy0ULGxizz0uwM4xt9b\n8sab95WrVwPt1IwjN8MbJye/gMqRlzVLCTKlg/9nnTWIy/li3uTGf0jth+O+6fXL\nm/6Azuo9WTIjXwrefyNQR1rVpBBKE4yN4Cj11cYavMho42oWc0M6E/v5wcYcG+JH\n1mQOyTf+sddUCheMHIaQrrmQTkx5NXdAVvrFEjnq6QKBgQDIoLqbUlCfmj9H6t7T\nKOGHhvSEOH13DacDZ6Lq5tJif1JMLv0+xzr5LT5ZA7ZrHNgqwSern6cz6/f8mfTT\nlX4qmCzzj+MIX0EvRYwa2oaDqp1lXDLOfrqNDkc5kRdG/2ixWd6XYaC0k2puzEcg\nW/NnB/k3qwyHYX7VwVlJW1hseQKBgQC7MQJsBq8QWHk+TvckfARmnP0U2i3Mwn0E\nrjvolK7Uz4AsRelIvB3CaoDGCB6oiWHDplSlTdmRe26WG+4kwY+vQRAPLQhIp4O8\n+qlxJWON/hF662tHlGMoN6OU4/+tsNR2Nk72AfpvefMkHxpuN25shSkHe4CD4A0i\nM9dgYjH0ewKBgCA1NV/j+g91Or135ieuA263ap+jVfj71xkD1TKytYmceQDD9mHS\nqBQCgGTX5LwTWFycv5qcucHrGteRe61P7X43Cdhb/A2HBTbqilBxTnDqvfPctkdS\nLu6gIS0Lrtn1/L+j9skEokD6/XYmEzENseiTbh3StuMw8qSsMoJFSM+5AoGBAIOH\nRz1iYOXqVJ7MW2leXrU/P7DEMQQ78B420s90kXfkqRnysZ0y2PI/ZWZAVFJ13aTc\nnYNdNS+8/BIrY+SdwPkSjVcsfDKYyb8inaZr8AzYZa3p9wJfqGCc36sBnSiNJGw/\ncrH25+ImXQqXdDnXZxaHZjHkvINtDa1nocEOni07AoGAJqGMqQJdVXHA2avAnDEk\nNjVax28Dg/HNWVF8hxeM4RlFJjN15odDR3e+fQOByzOXwSc4gmUeT4GKAvCcreLw\ntMEsW1KjQkmzoIVF0hqjDYUnMIYrMar3/vDZKMfqgLEou1FTmz8RNiBhiopQdY3h\ntflvrGgkmNh08nukKOW5m6g=\n-----END PRIVATE KEY-----\n",
      PRIVATE_KEY: "spreadsheet-ordersupport@apps-script-editor.iam.gserviceaccount.com",
      CLIENT_EMAIL: "0"
    }),
    EnvironmentPlugin('all', { prefix: 'VITE', defineOn: 'import.meta.env' }),
  ],
})
