FROM jupyter/scipy-notebook:latest

# based on examples from binder and jupyter showcase
MAINTAINER Malte Vogl <malte.vogl@hu-berlin.de>

# Install notebook extensions
RUN conda install -y -c conda-forge jupyter_contrib_nbextensions graphviz && \
    bash -c "jupyter nbextensions_configurator enable --user" && \
    bash -c "jupyter nbextension enable toc2/main" && \
    bash -c "jupyter nbextension enable --py latex_envs" && \
    conda clean -a -y

RUN pip3 install cltk textblob lxml
###################################
#
# Setup design of Edition Topoi
#
###################################

USER root

COPY data /home/jovyan

RUN chown -R jovyan:users /home/jovyan

COPY jupyter_notebook_config.py /home/jovyan/.jupyter

RUN mkdir /home/jovyan/.jupyter/custom

COPY custom /home/jovyan/.jupyter/custom

RUN chown -R jovyan:users /home/jovyan/.jupyter

USER jovyan
