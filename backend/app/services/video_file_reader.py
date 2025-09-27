import moviepy.editor as mp
import os

def extract_audio(video_path: str, output_path: str = "temp_audio.wav") -> str:
    clip = mp.VideoFileClip(video_path)
    clip.audio.write_audiofile(output_path)
    return output_path
